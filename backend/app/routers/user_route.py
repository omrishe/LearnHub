from fastapi import APIRouter, HTTPException,Depends
from app.database.decorators import get_con_wr,get_con_ro
from app.models.user_model import UserCreate

router=APIRouter(prefix="/api/users" , tags=["placeholder"])

#depends is a placeholder so malicious actor cant inject conn
@router.post("/signup")
@get_con_wr()
async def create_user(user_data: UserCreate, conn=Depends(lambda : None)):
    print(user_data)
    async with conn.transaction():  # explicit transaction
        row = await conn.fetchrow(
            "INSERT INTO users (username, email, password_hash, first_name, last_name ) VALUES ($1, $2, $3, $4) RETURNING id",
            user_data.username, user_data.email, user_data.password_hash,user_data.first_name,user_data.last_name
        )
    return {"message": "Course created", "id": row["id"]}