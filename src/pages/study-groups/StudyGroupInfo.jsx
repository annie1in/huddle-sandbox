import { studyGroups } from "../../data/studyGroups";
import Card from "../../components/ui/Card";

export default function StudyGroupInfo() {
  return (
    <div className="min-h-screen bg-[#FFDC90] p-4 flex justify-center">
      <div className="max-w-lg w-full flex flex-col gap-4">
        <p className="text-lg font-semibold text-gray-800 text-center">
          Ready to join? Confirm details below.
        </p>
        <Card data={studyGroups[0]} />
      </div>
    </div>
  );
}