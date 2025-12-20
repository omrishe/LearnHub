import os
from dotenv import load_dotenv
import asyncpg  # pyright: ignore[reportMissingImports]

load_dotenv()

db_connections_pool: asyncpg.pool.Pool = None

async def create_db():
    conn = await asyncpg.connect(
        user=os.getenv("POSTGRES_USER"),
        password=os.getenv("POSTGRES_PASSWORD"),
        database="postgres",  # connect to default DB first
        host=os.getenv("POSTGRES_HOST"),
        port=os.getenv("POSTGRES_PORT")
    )
    db_name = os.getenv("POSTGRES_DB")
    exists = await conn.fetchval(
        "SELECT 1 FROM pg_database WHERE datname = $1", db_name
    )
    if not exists:
        await conn.execute(f"CREATE DATABASE {db_name}")
        print(f"Database {db_name} created")
    await conn.close()

    
#init database connection pool
async def init_db_pool():
    global db_connections_pool
    db_connections_pool = await asyncpg.create_pool(
        host=os.getenv("POSTGRES_HOST"),
        port=int(os.getenv("POSTGRES_PORT")),
        user=os.getenv("POSTGRES_USER"),
        password=os.getenv("POSTGRES_PASSWORD"),
        database=os.getenv("POSTGRES_DB"),
        min_size=int(os.getenv("min_connections")),
        max_size=int(os.getenv("max_connections")),
    )


#close database connection pool
async def close_db_pool():
    await db_connections_pool.close()

