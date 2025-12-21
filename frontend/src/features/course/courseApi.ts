import { Course, CourseApiResponse } from "./course.types";
import { mapCourseFromApi } from "./course.utils";
import axios from "axios";

export async function fetchCourses(): Promise<Course[]> {
  const res = await fetch("/api/courses");
  const data: CourseApiResponse[] = await res.json();

  return data.map(mapCourseFromApi);
}
//work on type return getCourses():Promise<Course[]>
async function getCourses() {
  try {
    const response = await axios.get<CourseApiResponse[]>("/api/courses");
    return response.data.map(mapCourseFromApi);
  } catch (error) {
    console.error(error);
    return;
  }
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
