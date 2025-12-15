import { Course,CourseApiResponse } from "./course.types";
import { mapCourseFromApi } from "./course.utils";

  export async function fetchCourses(): Promise<Course[]> {
    const res = await fetch('/api/courses');
    const data: CourseApiResponse[] = await res.json();
  
    return data.map(mapCourseFromApi);
  }