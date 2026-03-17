import { useState } from "react";
import { studySpots } from "/src/data/studySpots.js"; // ← adjust path if needed

const InfoRow = ({ icon, label, value }) => (
  <div className="flex gap-3 items-start">
    <span className="text-[#2C4A7C] mt-0.5 text-lg">{icon}</span>
    <div>
      <p className="font-semibold text-[#1a1a2e] text-sm">{label}</p>
      <p className="text-gray-600 text-sm leading-snug">{value}</p>
    </div>
  </div>
);

const Badge = ({ label, color }) => {
  const colors = {
    green: "bg-green-200 text-green-800",
    orange: "bg-orange-200 text-orange-800",
    red: "bg-red-300 text-red-800",
  };
  return (
    <div className={`rounded-full px-4 py-2 text-sm font-semibold text-center ${colors[color]}`}>
      {label}
    </div>
  );
};

// ── BADGE COLOR HELPERS ── map data values to Badge color prop
const noiseBadgeColor = (level) => {
  if (level === "Silent") return "green";
  if (level === "Moderate") return "orange";
  return "red";
};

const crowdBadgeColor = (level) => {
  if (level === "Low") return "green";
  if (level === "Medium") return "orange";
  return "red";
};

export default function Card({ className = "" }) {
  const spot = studySpots[1]; // ← change index to show a different spot

  return (
    <div className="flex justify-center items-center w-full min-h-screen p-6">
      <div className="bg-white rounded-3xl shadow-md p-6 max-w-lg w-full flex flex-col gap-4">

        {/* LOCATION */}
        <div className="bg-blue-100 rounded-2xl px-5 py-3">
          <h1 className="text-2xl font-bold text-gray-800">{spot.name}</h1>
        </div>

        {/* DISTANCE */}
        <p className="text-gray-700 font-medium text-sm">{spot.distance} miles away · {spot.roomType}</p>

        {/* FILTERS */}
        <div className="grid grid-cols-3 gap-2">
          <div className="flex flex-col gap-1">
            <p className="text-xs text-gray-500 font-medium">Noise Level</p>
            <Badge label={spot.noiseLevel} color={noiseBadgeColor(spot.noiseLevel)} />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xs text-gray-500 font-medium">Busyness</p>
            <Badge label={spot.crowded} color={crowdBadgeColor(spot.crowded)} />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xs text-gray-500 font-medium">Open/Closed</p>
            <Badge label={spot.open ? "Open" : "Closed"} color={spot.open ? "green" : "red"} />
          </div>
        </div>

        <div className="flex gap-4">
          {/* PHOTO */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Doe_Memorial_Library%2C_UC_Berkeley.jpg/640px-Doe_Memorial_Library%2C_UC_Berkeley.jpg"
            alt={spot.name}
            className="w-44 h-44 object-cover rounded-2xl flex-shrink-0"
          />

          <div className="flex flex-col gap-3 justify-center">
            {/* SEATING */}
            <InfoRow icon="👥" label="Seating/Rooms" value={spot.seating} />

            {/* OUTLETS */}
            <InfoRow icon="🔌" label="Outlets" value={spot.outlets ? "Available" : "Not available"} />

            {/* HOURS */}
            <InfoRow icon="📅" label="Hours" value={spot.hours ?? "See website for hours"} />

            {/* NOTES */}
            <InfoRow icon="📋" label="Notes" value={spot.notes ?? "No notes available."} />
          </div>
        </div>

        {/* NAVIGATE BUTTON */}
        <button className="bg-amber-300 hover:bg-amber-400 transition-colors text-gray-800 font-bold text-lg rounded-2xl py-3 w-1/2 self-center">
          Navigate
        </button>

      </div>
    </div>
  );
}