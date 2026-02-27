import { useNavigate } from "react-router-dom"
import Button from "../../components/ui/Button"

export default function StudyGroupDiscovery() {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold text-black">Study Group Discovery</h1>
      <p className="text-gray-400 mb-6">This is where users will discover study groups.</p>
      <div className="flex flex-col items-start space-y-4">
        <Button onClick={() => navigate("/study-groups/info")}>Pretend I'm A StudyGroupCard</Button>  
        <Button onClick={() => navigate("/study-groups/create")}>Create Study Group</Button>  
      </div>
    </div>
  );
}