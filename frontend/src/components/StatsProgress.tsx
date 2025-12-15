
export default function StatsProgress() {
  const stats = [
    { id: 1, label: 'Courses Completed', value: 40 },
    { id: 2, label: 'Progress', value: 75 },
    { id: 3, label: 'Quizzes Passed', value: 60 },
  ];
//hi
  return (
    <section>
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Your Progress</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div key={stat.id} className="bg-white p-4 rounded shadow text-center">
            <div className="text-2xl font-bold text-gray-800">{stat.value}%</div>
            <div className="text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
