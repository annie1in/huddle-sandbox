import { useNavigate } from "react-router-dom"
import Button from "../../components/ui/Button"

export default function Signup() {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold text-black">Sign Up</h1>
      <p className="text-gray-400 mb-6">This is where users will create an account.</p>
      <Button onClick={() => navigate("/study-spots")}>Sign Up</Button>
    </div>
  );
}