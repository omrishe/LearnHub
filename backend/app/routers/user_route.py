from fastapi import APIRouter, HTTPException,Depends,Response
from app.database.decorators import get_con_wr,get_con_ro
from app.models.user_model import UserCreate, UserLogin
from app.utils.jwt import create_access_token
from app.utils.security import hash_password, set_access_token_cookie, verify_password

router=APIRouter(prefix="/api/users" , tags=["placeholder"])

#depends is a placeholder so malicious actor cant inject conn
@router.post("/signup")
@get_con_wr()
async def create_user(user_data: UserCreate, conn=Depends(lambda : None)):
    try:
        hashed_password=hash_password(user_data.password)
        print(hashed_password)
        async with conn.transaction():
            row = await conn.fetchrow(
                "INSERT INTO users (username, email, password, first_name, last_name ) VALUES ($1, $2, $3, $4 ,$5) RETURNING id",
                user_data.username, user_data.email, hashed_password,user_data.first_name,user_data.last_name
            )
        if row is None:
            raise Exception("No row returned from insert")
    except Exception as e:
        print("Error creating user:", e)
        raise HTTPException(status_code=500, detail="User creation failed")
    return {"message": "user created"}


#signin api find user>authenticate password>create token>set token
@router.post("/signin")
@get_con_ro()
async def login_user(user_data: UserLogin,response: Response, conn=Depends(lambda: None)):
    async with conn.transaction():
        row = await conn.fetchrow(
            """
            SELECT username, email, password, first_name, last_name,id
            FROM users
            WHERE email = $1
            """,
            user_data.email
        )
        if not row:
            raise HTTPException(status_code=401, detail="user does not exists")
        if not verify_password(user_data.password, row["password"]):
            raise HTTPException(status_code=401, detail="Invalid credentials")
        print("row is:\n",row)
        token = create_access_token(str(row["id"]))
        set_access_token_cookie(response,token)
    #maybe create an Pydantic class here aswell
    return {
        "username": row["username"],
        "email": row["email"],
        "first_name": row["first_name"],
        "last_name": row["last_name"],
        "token":token
    }