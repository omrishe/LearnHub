import { saveCourses, getAllCourses } from "./course.local.db";
import { mockCourses } from "./course.mock";

export async function initMockCourses() {
  const existing = await getAllCourses();
  if (existing.length === 0) {
    await saveCourses(mockCourses);
    return mockCourses;
  }
  return existing;
}
