import { useNavigate } from "react-router-dom"
import Button from "../../components/ui/Button"

import { useState } from "react";
import Input from "../../components/ui/Input";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
  if (!form.name || !form.email || !form.password) {
    alert("Please fill in all fields!");
    return;
  }
  console.log("User signed up:", form);
  // later this is where you'd send data to a backend
  navigate("/study-spots");
}

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="flex flex-col gap-4 w-full max-w-sm">
        <button
          onClick={() => navigate(-1)}
          className="self-start text-gray-500 hover:text-black"
        >
          ← Back
        </button>
        <h1 className="text-2xl font-bold">Sign Up</h1>
        <Input label="Name" name="name" placeholder="Enter your name" value={form.name} onChange={handleChange} />
        <Input label="Email" name="email" type="email" placeholder="Enter your email" value={form.email} onChange={handleChange} />
        <Input label="Password" name="password" type="password" placeholder="Enter your password" value={form.password} onChange={handleChange} />
        <button 
          onClick = {handleSubmit}
          className = "bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}