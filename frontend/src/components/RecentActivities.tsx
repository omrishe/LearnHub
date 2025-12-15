export default function RecentActivities() {
  const recentActivities = [
    { id: 1, text: 'Completed "Angular Basics" lesson 2', time: '2 hours ago' },
    { id: 2, text: 'Started "TypeScript Deep Dive"', time: '1 day ago' },
    { id: 3, text: 'Enrolled in "Tailwind CSS"', time: '3 days ago' },
  ];
//hi
  return (
    <section>
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Recent Activities</h2>
      <ul className="space-y-2">
        {recentActivities.map((activity) => (
          <li key={activity.id} className="bg-white p-4 rounded shadow flex justify-between items-center">
            <span>{activity.text}</span>
            <span className="text-gray-400 text-sm">{activity.time}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
