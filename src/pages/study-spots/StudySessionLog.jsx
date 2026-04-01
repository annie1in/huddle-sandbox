import React, { useState } from "react";
import { studySessions as initialSessions } from "../../data/studySessions";

export default function StudySessionLog() {
  const [sessions, setSessions] = useState(initialSessions);
  const [formData, setFormData] = useState({
    spot: "",
    productivity: 0,
    comfort: 0,
    location: 0,
    recommend: null,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSelect(name, value) {
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newSession = {
      id: sessions.length + 1,
      ...formData,
    };

    setSessions([newSession, ...sessions]);

    setFormData({
      spot: "",
      productivity: 0,
      comfort: 0,
      location: 0,
      recommend: null,
    });
  }

  return (
    <div className="flex flex-col items-center bg-gray-50 min-h-screen py-10">
      <form
        onSubmit={handleSubmit}
        className="w-96 h-[874px] relative bg-[radial-gradient(ellipse_at_50%_50%,_#FFB000_0%,_#FFDC90_81%,_#FFECC1_100%)] overflow-hidden rounded-[40px] shadow-2xl"
      >
        <div className="absolute left-[20px] top-[60px] text-5xl font-['Marcellus_SC']">
          Huddle
        </div>

        <div className="w-80 h-[540px] left-[32px] top-[180px] absolute bg-white rounded-3xl p-6 shadow-sm overflow-y-auto">
          <div className="mb-6">
            <label className="block text-[10px] uppercase font-bold text-gray-400 mb-2">
              Study Spot
            </label>
            <input
              name="spot"
              value={formData.spot}
              onChange={handleChange}
              placeholder="e.g. Doe Library"
              className="w-full p-2 bg-blue-50 rounded-lg border border-blue-100 text-sm outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {["productivity", "comfort", "location"].map((field) => (
            <div key={field} className="mb-6">
              <label className="block text-[10px] uppercase font-bold text-gray-400 mb-2">
                {field}
              </label>
              <div className="flex justify-between">
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => handleSelect(field, num)}
                    className={`w-9 h-9 rounded-full font-bold text-sm transition-all ${
                      formData[field] === num
                        ? "bg-blue-900 text-white"
                        : "bg-amber-100"
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>
          ))}

          <div className="mb-6">
            <label className="block text-[10px] uppercase font-bold text-gray-400 mb-2">
              Recommend?
            </label>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => handleSelect("recommend", true)}
                className={`flex-1 py-2 rounded-xl font-bold text-xs ${
                  formData.recommend === true
                    ? "bg-green-600 text-white"
                    : "bg-gray-100"
                }`}
              >
                Yes
              </button>
              <button
                type="button"
                onClick={() => handleSelect("recommend", false)}
                className={`flex-1 py-2 rounded-xl font-bold text-xs ${
                  formData.recommend === false
                    ? "bg-red-600 text-white"
                    : "bg-gray-100"
                }`}
              >
                No
              </button>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-32 h-10 left-[132px] top-[740px] absolute bg-blue-900 text-white rounded-full font-bold shadow-lg active:scale-95 transition-transform"
        >
          Submit
        </button>
      </form>

      <div className="mt-10 w-full max-w-sm px-4">
        <h2 className="text-xl font-bold mb-4">Session History</h2>
        {sessions.map((session) => (
          <div
            key={session.id}
            className="bg-white p-4 rounded-xl shadow-sm border mb-3"
          >
            <p className="font-bold text-blue-900">{session.spot}</p>
            <div className="flex text-xs gap-3 text-gray-500 mt-1">
              <span>Prod: {session.productivity}</span>
              <span>Comf: {session.comfort}</span>
              <span>Loc: {session.location}</span>
              <span>Rec: {session.recommend ? "✅" : "❌"}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}