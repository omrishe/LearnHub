from . import db
from .table_defs import TABLE_DEFS
from dotenv import load_dotenv

load_dotenv()

async def init_schema(schema_name="learning_dashboard"):
    """
    Initialize schema and all tables in a single transaction.
    """
    async with db.db_connections_pool.acquire() as conn:
        trx = conn.transaction()
        await trx.start()
        try:
            # Create schema if it doesn't exist
            await conn.execute(f"CREATE SCHEMA IF NOT EXISTS {schema_name};")
            # Create tables defined in table_defs if it not exist
            for table_name, columns_sql in TABLE_DEFS.items():
                await conn.execute(f"""
                    CREATE TABLE IF NOT EXISTS {schema_name}.{table_name} (
                        {columns_sql}
                    );
                """)
            await trx.commit()
            print("Schema and tables initialized successfully.")
        except Exception as e:
            await trx.rollback()
            print(f"Error initializing schema/tables: {e}")
