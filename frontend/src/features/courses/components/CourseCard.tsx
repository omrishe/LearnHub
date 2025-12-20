import React from 'react';
import { Course } from '../course.types';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-1">{course.title}</h3>
      <p className="text-gray-500 text-xs mb-2">ID: {course.id}</p>
      <div className="flex items-center justify-between text-gray-600 text-sm">
        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
          {course.level}
        </span>
        <span>{course.durationMinutes} minutes</span>
      </div>
    </div>
  );
};

export default CourseCard;

