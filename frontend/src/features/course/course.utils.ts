import { Course, CourseApiResponse,CourseLevel } from "./course.types";
  
//mapper function (since the backend is going to be python it might be snake_case written)
export function mapCourseFromApi(api: CourseApiResponse): Course {
  return {
    id: api.id,
    title: api.title,
    description: api.description,
    level: api.level as CourseLevel,
    durationMinutes: api.duration_minutes,
    createdAt: api.created_at,
    updatedAt: api.updated_at,
    tags: api.tags,
  };
}