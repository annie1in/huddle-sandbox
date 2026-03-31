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
    navigate("/study-spots");
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-8" style={{ backgroundColor: "#F9C84A" }}>
      <div className="relative w-full max-w-sm flex flex-col px-8 py-10 rounded-3xl overflow-hidden mx-4" style={{ backgroundColor: "#F9C84A" }}>
        
        {/* Glow */}
        <div className="absolute rounded-full pointer-events-none" style={{ width: "220px", height: "180px", background: "radial-gradient(ellipse at center, #F97316 0%, #FBBF24 40%, transparent 75%)", top: "60px", left: "50%", transform: "translateX(-50%)", opacity: 0.7 }} />

        <h1 className="font-serif font-bold tracking-widest uppercase z-10" style={{ fontSize: "22px", color: "#1C1008", fontFamily: "Georgia, serif" }}>Huddle</h1>

        <h2 className="text-center font-bold z-10 mt-12 mb-1" style={{ fontSize: "32px", color: "#1C1008", fontFamily: "Georgia, serif" }}>Sign in</h2>
        <p className="text-center text-xs z-10 mb-8" style={{ color: "#7C4A00" }}>
          New user?{" "}
          <span className="font-bold cursor-pointer" style={{ color: "#1C1008" }} onClick={() => navigate("/signup")}>
            Create an account
          </span>
        </p>

        <label className="text-sm z-10 mb-1" style={{ color: "#1C1008" }}>Email / Username</label>
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Type your email"
          className="z-10 mb-4 px-4 py-3 text-sm outline-none"
          style={{ backgroundColor: "#FDD878", borderRadius: "50px", border: "none", color: "#B07A00" }}
        />

        <label className="text-sm z-10 mb-1" style={{ color: "#1C1008" }}>Password</label>
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Type password"
          className="z-10 mb-2 px-4 py-3 text-sm outline-none"
          style={{ backgroundColor: "#FDD878", borderRadius: "50px", border: "none", color: "#B07A00" }}
        />

        <p className="text-right text-sm font-bold z-10 mb-6 cursor-pointer" style={{ color: "#1C1008" }}>Forgot Password</p>

        <button
          onClick={handleSubmit}
          className="z-10 py-3 font-bold text-sm rounded-full"
          style={{ backgroundColor: "#1C1008", color: "#F9C84A" }}
        >
          Sign in
        </button>
      </div>
    </div>
  );
}