// src/components/Auth/SignupForm.jsx
import { useState } from "react";

export default function SignupForm() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white shadow rounded-2xl space-y-4">
      <h2 className="text-xl font-bold text-center">Signup</h2>

      <input type="text" name="name" placeholder="Name"
        value={form.name} onChange={handleChange}
        className="w-full p-2 border rounded-lg" />

      <input type="email" name="email" placeholder="Email"
        value={form.email} onChange={handleChange}
        className="w-full p-2 border rounded-lg" />

      <input type="password" name="password" placeholder="Password"
        value={form.password} onChange={handleChange}
        className="w-full p-2 border rounded-lg" />

      <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
        Signup
      </button>
    </form>
  );
}
