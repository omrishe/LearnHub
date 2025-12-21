from . import db
from functools import wraps
from fastapi import Depends
from app.utils.utils import log_errors


#get connection and write (with commit) if it succeded
def get_con_wr(commit=True,schema="learning_dashboard"):
    """
    Decorator that provides a connection from the async pool and a transaction.
    Automatically commits if the function succeeds, rolls back if an error occurs.
    Returns a tuple: (result, data, error)
    """
    def decorator(func):
        @wraps(func)
        async def wrapper(*args, **kwargs):
            async with db.db_connections_pool.acquire() as conn:
                trx = conn.transaction()
                await trx.start()
                try:
                    await conn.execute(f'SET search_path TO {schema}')
                    kwargs['conn'] = conn
                    func_ret = await func(*args, **kwargs)
                    #future proofing for additional return value
                    # Normalize return: if 2 values - unpack
                    if isinstance(func_ret, tuple) and len(func_ret) == 2:
                        result, data = func_ret
                    else:
                        result, data = func_ret, None

                    # Commit if requested
                    if commit:
                        await trx.commit()
                    return result, data, None  # always return 3 values

                except Exception as e:
                    log_errors(func,e)
                    await trx.rollback()
                    return None, None, e  # on error, result and data are None and error as last element
        return wrapper
    return decorator

#get connection and read only
def get_con_ro(schema="learning_dashboard"):
    """
    Decorator that provides a connection from the async pool.
    The decorated function is responsible for using it (no commit/rollback).
    """
    def decorator(func):
        @wraps(func)
        async def wrapper(*args, **kwargs):
            try:
                async with db.db_connections_pool.acquire() as conn:
                    await conn.execute(f'SET search_path TO {schema}')
                    kwargs['conn'] = conn
                    return await func(*args, **kwargs)
            except Exception as e:
                log_errors(func,e)
        return wrapper
    return decorator