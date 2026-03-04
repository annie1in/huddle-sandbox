import { useState } from "react";
import { useNavigate } from "react-router-dom";

const dataByFilter = {
  Week: {
    stats: [
      { label: "Total Sessions", value: "4" },
      { label: "Total Hours", value: "6.2" },
      { label: "Avg Length", value: "1h 33m" },
      { label: "Streak", value: "4 days" },
    ],
    mostVisited: [
      { name: "Doe Library", visits: 3, hours: 4, rating: 4.5, max: 3 },
      { name: "Binge Coffee House", visits: 2, hours: 3, rating: 4.3, max: 3 },
      { name: "Caffè Strada", visits: 1, hours: 2, rating: 4.1, max: 3 },
    ],
    lastSession: "1h 20m · Doe Library · ★ 4/5",
  },
  Month: {
    stats: [
      { label: "Total Sessions", value: "12" },
      { label: "Total Hours", value: "18.5" },
      { label: "Avg Length", value: "1h 32m" },
      { label: "Streak", value: "4 days" },
    ],
    mostVisited: [
      { name: "Doe Library", visits: 8, hours: 12, rating: 4.5, max: 8 },
      { name: "Binge Coffee House", visits: 6, hours: 9, rating: 4.3, max: 8 },
      { name: "Caffè Strada", visits: 4, hours: 5, rating: 4.1, max: 8 },
      { name: "Qahwa Time", visits: 3, hours: 4, rating: 3.9, max: 8 },
      { name: "MLK Jr. Building", visits: 2, hours: 3, rating: 3.5, max: 8 },
    ],
    lastSession: "1h 20m · Doe Library · ★ 4/5",
  },
  All: {
    stats: [
      { label: "Total Sessions", value: "47" },
      { label: "Total Hours", value: "72.0" },
      { label: "Avg Length", value: "1h 31m" },
      { label: "Streak", value: "4 days" },
    ],
    mostVisited: [
      { name: "Doe Library", visits: 20, hours: 30, rating: 4.5, max: 20 },
      { name: "Binge Coffee House", visits: 15, hours: 22, rating: 4.3, max: 20 },
      { name: "Caffè Strada", visits: 10, hours: 14, rating: 4.1, max: 20 },
      { name: "Qahwa Time", visits: 8, hours: 10, rating: 3.9, max: 20 },
      { name: "MLK Jr. Building", visits: 5, hours: 7, rating: 3.5, max: 20 },
    ],
    lastSession: "1h 20m · Doe Library · ★ 4/5",
  },
};

export default function Insights() {
  const [activeFilter, setActiveFilter] = useState("Week");
  const navigate = useNavigate();
  const { stats, mostVisited, lastSession } = dataByFilter[activeFilter];

  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-base ${i < Math.round(rating) ? "text-red-500" : "text-gray-200"}`}>★</span>
    ));

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-10">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Insights</h1>
            <p className="text-gray-400 mt-1">Track your study habits and favorite spots :3</p>
          </div>
          <div className="flex gap-2">
            {["Week", "Month", "All"].map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all ${
                  f === activeFilter
                    ? "bg-red-500 text-white border-red-500"
                    : "bg-white text-gray-500 border-gray-200 hover:border-red-300"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {stats.map((s) => (
            <div key={s.label} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">{s.label}</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{s.value}</p>
            </div>
          ))}
        </div>

        {/* Most Visited */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-5">Most Visited</h2>
          <div className="space-y-5">
            {mostVisited.map((spot, i) => (
              <div key={spot.name} className="flex items-center gap-4">
                <span className="text-sm font-bold text-gray-300 w-5 text-center">{i + 1}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-semibold text-gray-900">{spot.name}</span>
                    <span className="text-xs text-gray-400">{spot.visits} visits · {spot.hours}h</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-red-400 rounded-full transition-all duration-500"
                      style={{ width: `${(spot.visits / spot.max) * 100}%` }}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-1 min-w-max">
                  {renderStars(spot.rating)}
                  <span className="text-xs text-gray-400 ml-1">{spot.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Sessions */}
        <div
          onClick={() => navigate("/past-sessions")}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 py-4 flex items-center justify-between cursor-pointer hover:border-red-300 hover:shadow-md transition-all"
        >
          <div>
            <p className="text-sm font-semibold text-gray-900">View all past sessions</p>
            <p className="text-xs text-gray-400 mt-0.5">Last: {lastSession}</p>
          </div>
          <span className="text-gray-300 text-xl">→</span>
        </div>

      </div>
    </div>
  );
}