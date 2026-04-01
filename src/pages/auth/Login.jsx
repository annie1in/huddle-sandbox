import { useNavigate } from "react-router-dom"
import Button from "../../components/ui/Button"
import Modal from "../../components/ui/Modal"

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold text-black">Login</h1>
      <p className="text-gray-400 mb-6">This is where users will log in.</p>
      <div className="flex flex-col items-start space-y-4">
        <Button onClick={() => navigate("/signup")}>Sign Up</Button>
        <Button onClick={() => navigate("/study-spots")}>Log In</Button>
      </div>
      
    </div>
  );
}

