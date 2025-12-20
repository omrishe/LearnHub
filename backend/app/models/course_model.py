from pydantic import BaseModel
from typing import Optional

# 1. Base model with shared attributes
class CourseBase(BaseModel):
    title: str
    level: str
    duration_minutes: int
    
    class Config:
        orm_mode = True

# 2. Model for creating a course (input)
class CourseCreate(CourseBase):
    pass  # inherits all fields from CourseBase

# 3. Model for reading a course (output)
class CourseRead(CourseBase):
    id: int  # include DB-generated id


# 4. Model for updating a course (input)
class CourseUpdate(BaseModel):
    title: Optional[str] = None
    level: Optional[str] = None
    duration_minutes: Optional[int] = None