import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DollarSign } from "lucide-react";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("login");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg">
        {/* Header Section */}
        <div className="p-8 space-y-4 text-center">
          <div className="flex justify-center">
            <div className="h-16 w-16 rounded-2xl bg-blue-600 flex items-center justify-center shadow-md">
              <DollarSign className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Expense Management</h1>
          <p className="text-gray-600">
            {activeTab === "login" ? "Sign in to your account" : "Create your account and company"}
          </p>
        </div>

        {/* Tabs */}
        <div className="px-8">
          <div className="grid grid-cols-2 gap-2 p-1 bg-gray-100 rounded-lg mb-6">
            <button 
              onClick={() => setActiveTab("login")}
              className={`py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                activeTab === "login" 
                  ? "bg-white text-blue-600 shadow-sm" 
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Login
            </button>
            <button 
              onClick={() => setActiveTab("signup")}
              className={`py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                activeTab === "signup" 
                  ? "bg-white text-blue-600 shadow-sm" 
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* Form Section */}
        <div className="px-8 pb-8">
          {activeTab === "login" ? (
            <LoginForm navigate={navigate} />
          ) : (
            <SignupForm navigate={navigate} />
          )}
        </div>
      </div>
    </div>
  );
}

// Login Form Component
function LoginForm({ navigate }) {
  const handleLogin = (e) => {
    e.preventDefault();
    // Simple frontend validation
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    // Simulate successful login and navigate to dashboard
    alert("Login successful! Redirecting to dashboard...");
    navigate("/dashboard");
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Email</label>
        <input
          name="email"
          type="email"
          placeholder="you@company.com"
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Password</label>
        <input
          name="password"
          type="password"
          placeholder="••••••••"
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <button 
        type="submit"
        className="w-full bg-blue-600 text-white p-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
      >
        Sign In
      </button>
    </form>
  );
}

// Signup Form Component
function SignupForm({ navigate }) {
  const handleSignUp = (e) => {
    e.preventDefault();
    // Simple frontend validation
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const companyName = formData.get("companyName");
    const country = formData.get("country");

    if (!email || !password || !firstName || !lastName || !companyName || !country) {
      alert("Please fill in all fields");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long");
      return;
    }

    // Simulate successful signup and navigate to dashboard
    alert("Account created successfully! Redirecting to dashboard...");
    localStorage.setItem('isLoggedIn', 'true');
    navigate("/dashboard");
  };

  return (
    <form onSubmit={handleSignUp} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">First Name</label>
          <input
            name="firstName"
            type="text"
            placeholder="John"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Last Name</label>
          <input
            name="lastName"
            type="text"
            placeholder="Doe"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Email</label>
        <input
          name="email"
          type="email"
          placeholder="you@company.com"
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Password</label>
        <input
          name="password"
          type="password"
          placeholder="••••••••"
          required
          minLength={6}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Company Name</label>
        <input
          name="companyName"
          type="text"
          placeholder="Acme Inc."
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Country</label>
        <input
          name="country"
          type="text"
          placeholder="United States"
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <button 
        type="submit"
        className="w-full bg-blue-600 text-white p-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
      >
        Create Account
      </button>
    </form>
  );
}