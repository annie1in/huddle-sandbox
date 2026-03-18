import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/ui/Input";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.email || !form.password) {
      alert("Please fill in all fields!");
      return;
    }
    console.log("User logged in:", form);
    navigate("/study-spots");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="flex flex-col gap-4 w-full max-w-sm">
        <h1 className="text-2xl font-bold">Login</h1>

        <Input label="Email" name="email" type="email" placeholder="Enter your email" value={form.email} onChange={handleChange} />
        <Input label="Password" name="password" type="password" placeholder="Enter your password" value={form.password} onChange={handleChange} />

        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Log In
        </button>

        <p className="text-sm text-center text-gray-500">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-blue-500 cursor-pointer hover:underline"
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}