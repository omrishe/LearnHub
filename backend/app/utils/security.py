# Password hashing & verification
from fastapi import Response
import bcrypt

ACCESS_TOKEN_MAX_AGE = 24 * 60 * 60  # 1 day


def hash_password(password: str) -> str: 
    """Hash a password using bcrypt""" 
    return bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt()).decode("utf-8")


def verify_password(plain_password: str, hashed: str) -> bool:
    """Verify a password against its hash"""
    return bcrypt.checkpw(
        plain_password.encode("utf-8"),
        hashed.encode("utf-8"),
    )

def set_access_token_cookie(response: Response, token: str, max_age: int = ACCESS_TOKEN_MAX_AGE):
    response.set_cookie(
        key="token",
        value=token,
        httponly=True,
        secure=True,
        samesite="None",
        #domain="www.placeholder.com", --- #set this as aws cloudfront in the future
        max_age=max_age
    )