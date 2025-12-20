import { Course,CourseApiResponse } from "./course.types";
import { mapCourseFromApi } from "./course.utils";

  export async function fetchCourses(): Promise<Course[]> {
    const res = await fetch('/api/courses');
    const data: CourseApiResponse[] = await res.json();
  
    return data.map(mapCourseFromApi);
  }

/*
async function loadMoreCourses() {
  const res = await fetch('/api/courses?limit=20&after=' + lastCourseId);
  const newCourses: Course[] = await res.json();

  // Append to cache
  coursesCache.current = [...coursesCache.current, ...newCourses];

  // Update UI
  setVisibleCourses(prev => [...prev, ...newCourses]);
}
  */