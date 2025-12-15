import Link from "next/link";

export default function FeaturedCourses() {
  const featuredCourses = [
    { index: 1, title: 'Angular Basics', description: 'Learn the fundamentals of Angular.', courseId: 999 },
    { index: 2, title: 'TypeScript Deep Dive', description: 'Master TypeScript for frontend development.', courseId: 965 },
    { index: 3, title: 'Tailwind CSS', description: 'Build beautiful UIs with Tailwind.', courseId: 243 },
  ];
  const courseRootUrl = "/courses/";

  return (
    <div>
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Featured Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {featuredCourses.map((course) => (
          <div key={course.index} className="bg-white rounded shadow p-4 hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">{course.title}</h3>
            <p className="text-gray-600">{course.description}</p>
            <Link href={courseRootUrl + course.courseId} className="text-yellow-400 hover:underline mt-2 inline-block">View Course</Link>
          </div>
        ))}
      </div>
    </div>
  );
}