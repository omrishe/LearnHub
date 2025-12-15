import Link from "next/link";
import FeaturedCourses from '@/components/FeaturedCourses';
import RecentActivities from "@/components/RecentActivities";
import StatsProgress from "@/components/StatsProgress";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 space-y-10">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Welcome to LearnHub</h1>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          Your personal learning dashboard. Explore courses, track progress, and manage your profile.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/courses" className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-6 py-3 rounded font-semibold">
            Explore Courses
          </Link>
          <Link href="/profile" className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded font-semibold">
            View Profile
          </Link>
        </div>
      </section>
      {/* Featured Courses */}
      <FeaturedCourses />
      {/* Recent Activities */}
      <RecentActivities />
      {/* Statistics / Progress */}
      <StatsProgress />
    </div>
  );
}
