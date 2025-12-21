from fastapi import APIRouter, HTTPException,Depends
from app.database.decorators import get_con_wr,get_con_ro
from app.models.course_model import CourseCreate

router=APIRouter(prefix="/courses" , tags=["placeholder"])

#depends is a placeholder so malicious actor cant inject
@router.post("/new")
@get_con_wr()
async def create_course(new_course: CourseCreate, conn=Depends(lambda : None)):
    print(new_course)
    async with conn.transaction():  # explicit transaction
        row = await conn.fetchrow(
            "INSERT INTO courses (title, level, duration_minutes) VALUES ($1, $2, $3) RETURNING id",
            new_course.title, new_course.level, new_course.duration_minutes
        )
    return {"message": "Course created", "id": row["id"]}





@router.get("")
@get_con_ro()
async def list_courses(level: str = None, conn=None):
    # Build base query
    sql = "SELECT id, title, level, duration_minutes FROM courses"
    values = []

    # Add filtering for course if level is provided
    if level:
        sql += " WHERE level = $1"
        values.append(level)

    # Fetch rows from the database
    rows = await conn.fetch(sql, *values)

    # Convert rows to list of dicts
    courses = [
        {
            "id": row["id"],
            "title": row["title"],
            "level": row["level"],
            "duration_minutes": row["duration_minutes"]
        }
        for row in rows
    ]
    return courses

@router.get("/{course_id}")
@get_con_ro()
async def get_course(course_id: int, conn=None):
    # Fetch the course by ID
    row = await conn.fetchrow(
        "SELECT id, title, level, duration_minutes FROM courses WHERE id = $1",
        course_id
    )
    # If not found, raise 404
    if row is None:
        raise HTTPException(status_code=404, detail="Course not found")
    # Convert to dict -- for now still no pattern for return value change in the future
    return {
        "id": row["id"],
        "title": row["title"],
        "level": row["level"],
        "duration_minutes": row["duration_minutes"]
    }