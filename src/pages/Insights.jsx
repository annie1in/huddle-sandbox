import { useNavigate } from "react-router-dom";
import Card from "../components/ui/Card";
import { insightsData } from "../data/insights";

export default function Insights() {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-1">Insights</h1>
      <p className="text-gray-400 mb-6">Your past study sessions</p>

      <div className="flex flex-col gap-4">
        {insightsData.map((session) => (
          <Card
            key={session.id}
            title={session.location}
            subtitle={`${session.hoursStudied} hours · ${session.date}`}
            details={session.notes}
          />
        ))}
      </div>
    </div>
  );
}