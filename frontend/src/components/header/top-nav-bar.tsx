import Link from 'next/link';

export default function TopNavBar() {
  return (
    <nav className="bg-gray-800 text-white px-6 py-3 flex justify-between items-center">
      {/* add Logo */}
      <div className="text-xl font-bold">
        MyApp
      </div>

      {/* Navigation links */}
      <ul className="flex gap-4">
        <li>
          <Link href="/home" className="hover:text-yellow-400">Home</Link>
        </li>
        <li>
          <Link href="/profile" className="hover:text-yellow-400">Profile</Link>
        </li>
        <li>
          <Link href="/courses" className="hover:text-yellow-400">Courses</Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-yellow-400">About</Link>
        </li>
      </ul>
      <div className="space-x-1">
        <button className="bg-yellow-300 text-gray-800 px-3 py-1 rounded hover:bg-yellow-500">
          <Link href="/login" className="hover:text-yellow-400">Sign In</Link>
        </button>
        <button className="bg-yellow-400 text-gray-800 px-3 py-1 rounded hover:bg-yellow-500">
          <Link href="/signup" className="hover:text-yellow-400">Sign up</Link>
        </button>
      </div>
    </nav>
  );
}
