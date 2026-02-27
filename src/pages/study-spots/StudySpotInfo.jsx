import { useNavigate } from "react-router-dom"
import Button from "../../components/ui/Button"

export default function StudySpotInfo() {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold text-black">Study Spot Info</h1>
      <p className="text-gray-400 mb-6">This is where users will find information about a study spot.</p>
      <Button onClick={() => navigate("/study-spots/log")}>Log Study Session Here</Button>       
    </div>
  );
}