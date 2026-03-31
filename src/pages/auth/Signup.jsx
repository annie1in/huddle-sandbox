import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.password || !form.confirm) {
      alert("Please fill in all fields!");
      return;
    }
    if (form.password !== form.confirm) {
      alert("Passwords don't match!");
      return;
    }
    navigate("/study-spots");
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-8" style={{ backgroundColor: "#F9C84A" }}>
      <div className="relative w-full max-w-sm flex flex-col px-8 py-10 rounded-3xl overflow-hidden mx-4" style={{ backgroundColor: "#F9C84A" }}>

        {/* Glow */}
        <div className="absolute rounded-full pointer-events-none" style={{ width: "220px", height: "180px", background: "radial-gradient(ellipse at center, #F97316 0%, #FBBF24 40%, transparent 75%)", top: "60px", left: "50%", transform: "translateX(-50%)", opacity: 0.7 }} />

        <h1 className="font-bold tracking-widest uppercase z-10" style={{ fontSize: "22px", color: "#1C1008", fontFamily: "Georgia, serif" }}>Huddle</h1>

        <h2 className="text-center font-bold z-10 mt-12 mb-1" style={{ fontSize: "32px", color: "#1C1008", fontFamily: "Georgia, serif" }}>Sign up</h2>
        <p className="text-center text-xs z-10 mb-8" style={{ color: "#7C4A00" }}>
          Already have an account?{" "}
          <span className="font-bold cursor-pointer" style={{ color: "#1C1008" }} onClick={() => navigate("/")}>
            Sign in
          </span>
        </p>

        {[
          { label: "First Name and Last Name", name: "name", placeholder: "Type full name", type: "text" },
          { label: "Email", name: "email", placeholder: "name@berkeley.edu", type: "email" },
          { label: "Password", name: "password", placeholder: "Type password", type: "password" },
          { label: "Confirm Password", name: "confirm", placeholder: "Type password again", type: "password" },
        ].map((field) => (
          <div key={field.name} className="z-10">
            <label className="text-sm mb-1 block" style={{ color: "#1C1008" }}>{field.label}</label>
            <input
              name={field.name}
              type={field.type}
              value={form[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              className="w-full mb-4 px-4 py-3 text-sm outline-none"
              style={{ backgroundColor: "#FDD878", borderRadius: "50px", border: "none", color: "#B07A00" }}
            />
          </div>
        ))}

        <button
          onClick={handleSubmit}
          className="z-10 py-3 font-bold text-sm rounded-full"
          style={{ backgroundColor: "#1C1008", color: "#F9C84A" }}
        >
          Create account
        </button>
      </div>
    </div>
  );
}