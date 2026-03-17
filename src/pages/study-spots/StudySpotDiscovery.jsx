import { useNavigate } from "react-router-dom"
import Button from "../../components/ui/Button"
import Card from "../../components/ui/Card";

export default function StudySpotDiscovery() {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold text-black">Study Spot Discovery</h1>
      <p className="text-gray-400 mb-6">This is where users will discover study spots.</p>
      <Card />  
    </div>
  );
}