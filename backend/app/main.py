
from fastapi import FastAPI,HTTPException
from pydantic import BaseModel
from .database.db import init_db_pool,close_db_pool,create_db
from .database.create_tables import init_schema
from contextlib import asynccontextmanager
from .routers.course_route import router as course_router
from .routers.query_route import router as query_router

#life span code, runs before/after app start
@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup Code logic — before handling requests
    await create_db()
    await init_db_pool()
    await init_schema()
    yield
    # Shutdown Code logic — after server stops
    await close_db_pool()  # or cleanup resources

app = FastAPI(lifespan=lifespan)
app.include_router(course_router)
app.include_router(query_router)



@app.get("/")
async def read_root():
    '''
    FG Example First Fast API Example 
    '''
    return {"GFG Example": "FastAPI"}


