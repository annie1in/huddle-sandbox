import React, { useState } from "react";
import { studySessions as initialSessions } from "../../data/studySessions";

export default function StudySessionLog() {
  // 1. Move state inside the component
  const [sessions, setSessions] = useState(initialSessions);
  const [formData, setFormData] = useState({
    spot: "",
    productivity: "",
    comfort: "",
    location: "",
    recommend: "",
  });

  // 2. Fix handleChange to actually update the state
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value, // This updates ONLY the field that changed
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newSession = {
      id: sessions.length + 1,
      ...formData,
    };

    setSessions([...sessions, newSession]);
    
    // Clear form after submit
    setFormData({ spot: "", productivity: "", comfort: "", location: "", recommend: "" });
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold text-black">Study Session Log</h1>
      <p className="text-gray-400">This is where users will rate their study sessions.</p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-2 my-4">
        <h3 className="text-lg font-bold text-black">Study Spot</h3>
        <input
          name="spot" // Matches state key
          value={formData.spot}
          onChange={handleChange}
          placeholder="Study Spot Name"
          className="border p-1"
        />
        <h3 className="text-lg font-bold text-black">Productivity</h3>
        <input
          name="productivity"
          type="number"
          min="1"
          max="5"
          value={formData.productivity}
          onChange={handleChange}
          placeholder="Rate from 1-5"
          className="border p-1"
        />
        <h3 className="text-lg font-bold text-black">Comfort</h3>
        <input
          name="comfort"
          type="number"
          min="1"
          max="5"
          value={formData.comfort}
          onChange={handleChange}
          placeholder="Rate from 1-5"
          className="border p-1"
        />
        <h3 className="text-lg font-bold text-black">Location</h3>
        <input
          name="location"
          type="number"
          min="1"
          max="5"
          value={formData.location}
          onChange={handleChange}
          placeholder="Rate from 1-5"
          className="border p-1"
        />
        <div className="flex flex-col gap-1">
          <label className="font-bold text-lg text-black">Recommend?</label>
          <select
            name="recommend"
            value={formData.recommend}
            onChange={handleChange}
            className="border p-2 rounded bg-white"
          >
            <option value="">Select an option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Log Session
        </button>
      </form>

      <hr />

      <div className="mt-4">
        {sessions.map((session) => (
          <div key={session.id} className="border-b py-2">
            <p><strong>Study Spot:</strong> {session.spot}</p>
            <p><strong>Productivity:</strong> {session.productivity}</p>
            <p><strong>Comfort: {session.comfort}</strong></p>
            <p><strong>Location: {session.location}</strong></p>
            <p><strong>Recommend: {session.recommend}</strong></p>
          </div>
        ))}
      </div>
    </div>
  );
}