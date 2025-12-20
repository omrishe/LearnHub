import { openDB, IDBPDatabase } from 'idb';
import { Course } from './course.types';

const DB_NAME = 'CoursesDB';
const STORE_NAME = 'courses';
const DB_VERSION = 1;

let dbInstance: IDBPDatabase | null = null;

// Initi the database
async function initDB(): Promise<IDBPDatabase> {
  if (dbInstance) return dbInstance;

  dbInstance = await openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    },
  });

  return dbInstance;
}

// Save multiple courses to IndexedDB
export async function saveCourses(courses: Course[]): Promise<void> {
  const db = await initDB();
  const tx = db.transaction(STORE_NAME, 'readwrite');
  const store = tx.objectStore(STORE_NAME);

  courses.forEach((course) => store.put(course));

  await tx.done;
}

// Get all courses from IndexedDB
export async function getAllCourses(): Promise<Course[]> {
  const db = await initDB();
  return await db.getAll(STORE_NAME);
}

// Get a single course by ID
export async function getCourseById(id: string): Promise<Course | undefined> {
  const db = await initDB();
  return await db.get(STORE_NAME, id);
}

// Optional: clear all courses
export async function clearCourses(): Promise<void> {
  const db = await initDB();
  const tx = db.transaction(STORE_NAME, 'readwrite');
  await tx.objectStore(STORE_NAME).clear();
  await tx.done;
}