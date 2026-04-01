import { useParams } from "react-router-dom";
import { studyGroups } from "../../data/studyGroups";
import Card from "../../components/ui/Card";

export default function StudyGroupInfo() {
  const { id } = useParams();

  const group = studyGroups.find(
    (g) => g.id === parseInt(id)
  );

  if (!group) {
    return <div>Group not found</div>;
  }

  return (
    <div className="min-h-screen bg-[#FFDC90] p-4 flex justify-center">
      <div className="max-w-lg w-full flex flex-col gap-4">
        <p className="text-lg font-semibold text-gray-800 text-center">
          Ready to join? Confirm details below.
        </p>
        <Card data={group} buttonText="Join" />
      </div>
    </div>
  );
}