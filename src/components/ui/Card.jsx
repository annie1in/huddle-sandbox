import { useState } from "react";
import { studySpots } from "/src/data/studySpots.js";
import { useNavigate } from "react-router-dom";

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
  if (level === "Low" || level === "Small") return "green";
  if (level === "Medium") return "orange";
  return "red";
};

const groupBadgeColor = (type) => {
  if (type === "In-Person") return "green";
  if (type === "Hybrid") return "orange";
  return "red";
};

const paceBadgeColor = (type) => {
  if (type === "Slow") return "green";
  if (type === "Medium") return "orange";
  return "red";
};

export default function Card({ data, className = "" }) {
const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center w-full p-6">
      <div className="bg-white rounded-3xl shadow-md p-6 max-w-lg w-full flex flex-col gap-4">

        {/* LOCATION/GROUP NAME */}
        {(data.name || data.course) && (
          <div className="bg-blue-100 rounded-2xl px-5 py-3">
            <h1 className="text-2xl font-bold text-gray-800">
              {data.name && data.name}
              {data.course && data.course}
              </h1>
          </div>
        )}

        {/* DISTANCE/CLASS NAME */}
        {(data.creator || data.distance || data.roomType) && (
          <p className="text-gray-700 font-medium text-sm">
            {data.creator && "Created By: " + data.creator}
            {data.distance && " " + data.distance + " miles away"}
            {data.roomType && " " + "· " + data.roomType}
          </p>
        )}

        {/* FILTERS */}
        <div className="flex flex-wrap gap-4">
          {data?.noiseLevel && (
            <div className="flex flex-col gap-1">
              <p className="text-xs text-gray-500 font-medium">Noise Level</p>
              <Badge label={data.noiseLevel} color={noiseBadgeColor(data.noiseLevel)} />
            </div>
          )}

          {data?.pace && (
            <div className="flex flex-col gap-1">
              <p className="text-xs text-gray-500 font-medium">Pace</p>
              <Badge label={data.pace} color={paceBadgeColor(data.pace)} />
            </div>
          )}

          {data?.crowded && (
            <div className="flex flex-col gap-1">
              <p className="text-xs text-gray-500 font-medium">Busyness</p>
              <Badge label={data.crowded} color={crowdBadgeColor(data.crowded)} />
            </div>
          )}

          {data?.open !== undefined && (
            <div className="flex flex-col gap-1">
              <p className="text-xs text-gray-500 font-medium">Open/Closed</p>
              <Badge label={data.open ? "Open" : "Closed"} color={data.open ? "green" : "red"} />
            </div>
          )}

          {data?.size && (
            <div className="flex flex-col gap-1">
              <p className="text-xs text-gray-500 font-medium">Size</p>
              <Badge label={data.size} color={crowdBadgeColor(data.size)} />
            </div>
          )}

          {data?.groupType && (
            <div className="flex flex-col gap-1">
              <p className="text-xs text-gray-500 font-medium">Type</p>
              <Badge label={data.groupType} color={groupBadgeColor(data.groupType)} />
            </div>
          )}

          {data?.pubPriv !== undefined && (
            <div className="flex flex-col gap-1">
              <p className="text-xs text-gray-500 font-medium">Public/Private</p>
              <Badge label={data.pubPriv ? "Public" : "Private"} color={data.pubPriv ? "green" : "red"} />
            </div>
          )}
        </div>
        
        <div className="flex gap-4">
          {/* IMAGE */}
          <img
            src={data?.image ?? "https://via.placeholder.com/300"}
            alt={data?.name ?? "image"}
            className="w-44 h-44 object-cover rounded-2xl flex-shrink-0"
          />

          <div className="flex flex-col gap-3 justify-center">
            {/* SEATING */}
            {data?.seating && (
              <InfoRow icon="👥" label="Seating/Rooms" value={data.seating} />
            )}

            {/* SIZE */}
            {data?.groupSize && (
              <InfoRow icon="👥" label="Group Size" value={data.groupSize} />
            )}

            {data?.outlets && (
              <InfoRow icon="🔌" label="Outlets" value={data.outlets} />
            )}

            {data?.availability && (
              <InfoRow icon="⏰" label="Availability" value={data.availability} />
            )}

            {data?.hours && (
              <InfoRow icon="📅" label="Hours" value={data.hours} />
            )}

            {data?.notes && (
              <InfoRow icon="📋" label="Notes" value={data.notes} />
            )}

            {data?.description && (
              <InfoRow icon="📋" label="Description" value={data.description} />
            )}

            {data?.meetingTime && (
              <InfoRow icon="⏰" label="Meeting Time" value={data.meetingTime} />
            )}

            {data?.vibe && (
              <InfoRow icon="😎" label="Vibe" value={data.vibe} />
            )}

            {data?.method && (
              <InfoRow icon="✏️" label="Method" value={data.method} />
            )}

          </div>
        </div>

        {/* VIEW BUTTON */}
        <button
          onClick={() => {
            if (data.course) {
              navigate("/study-groups/info");
            }
          }}
          className="bg-amber-300 hover:bg-amber-400 transition-colors text-gray-800 font-bold text-lg rounded-2xl py-3 w-1/2 self-center"
        >
          View
        </button>

      </div>
    </div>
  );
}