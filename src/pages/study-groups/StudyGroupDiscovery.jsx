import { studyGroups } from "../../data/studyGroups";
import { useNavigate } from "react-router-dom"
import Button from "../../components/ui/Button"
import Card from "../../components/ui/Card";

export default function StudyGroupDiscovery() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FFDC90] p-4">
      <div className="flex flex-col items-start space-y-4">
      <Card data={studyGroups[0]}/>
      <Card data={studyGroups[1]}/>
      </div>
    </div>
  );
}