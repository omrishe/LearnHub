from pydantic import BaseModel, EmailStr,constr,Field,ConfigDict
from typing import Optional
from datetime import datetime

# Base model for shared attributes
class UserBase(BaseModel):
    email: EmailStr
    username: str
    first_name: str = Field(alias="firstName")
    last_name: str = Field(alias="lastName")

    model_config = ConfigDict(
        from_attributes=True,
        validate_by_name=True
    )
    
# Model used for creating a new user
class UserCreate(UserBase):
    password: str  # plain password, will hash before storing

# Model returned in responses (without password)
class UserRead(UserBase):
    id: int
    created_at: datetime

class UserLogin(BaseModel):
    email: EmailStr
    password: str

#add this to password to make it require complexity after testing
#constr(
#        min_length=8,        # minimum number of characters
#        max_length=64,       # maximum number of characters
#        regex=r'^(?=.*[A-Z])(?=.*\d).+$' # must contain at least one uppercase and one digit

# Model for updating a user (PATCH)
class UserUpdate(BaseModel):
    email: Optional[EmailStr] = None
    first_name: Optional[str] = None
    last_name: Optional[str] = None
    password: Optional[str] = None