from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime

# Base model for shared attributes
class UserBase(BaseModel):
    email: EmailStr
    username: str
    first_name: str
    last_name: str
    class Config:
            orm_mode = True
    
# Model used for creating a new user
class UserCreate(UserBase):
    password_hash: str  # plain password, will hash before storing

# Model returned in responses (without password)
class UserRead(UserBase):
    id: int
    created_at: datetime

# Model for updating a user (PATCH)
class UserUpdate(BaseModel):
    email: Optional[EmailStr] = None
    first_name: Optional[str] = None
    last_name: Optional[str] = None
    password: Optional[str] = None