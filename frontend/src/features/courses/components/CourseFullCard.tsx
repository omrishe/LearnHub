import React from 'react';
import { Course } from '../course.types';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.title}</h3>
      <p className="text-gray-600 text-sm mb-4 flex-grow">{course.description}</p>
      <div className="flex items-center justify-between text-gray-500 text-xs">
        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
          {course.level}
        </span>
        <span>{course.durationMinutes} minutes</span>
      </div>
      {course.tags && course.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {course.tags.map((tag) => (
            <span key={tag} className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseCard;

