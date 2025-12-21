"use client";

import Link from "next/link";
import { Course } from "@/features/course/course.types";
import { useEffect, useState } from "react";
import {
  saveCourses,
  getAllCourses,
  clearCourses,
} from "@/features/course/course.local.db";
import { mockCourses } from "@/features/course/course.mock";
const courseRootUrl = "/courses/";

export default function FeaturedCourses() {
  const [featuredCourses, setfeaturedCourses] = useState<Course[]>([]);
  useEffect(() => {
    saveCourses(mockCourses).then(() => {
      getAllCourses().then((courses) =>
        setfeaturedCourses([courses[0], courses[1], courses[2]])
      );
    });
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">
        Featured Courses
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {featuredCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded shadow p-4 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-bold mb-2">{course.title}</h3>
            <p className="text-gray-600">{course.description}</p>
            <Link
              href={courseRootUrl + course.id}
              className="text-yellow-400 hover:underline mt-2 inline-block"
            >
              View Course
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
