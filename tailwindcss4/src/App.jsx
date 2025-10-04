import { Routes, Route, Link } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import ManagerDashboard from "./pages/ManagerDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Landing from "./pages/Landing";
import AuthPage from "./pages/Auth";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Simple Navbar */}
      <nav className="bg-blue-600 text-white p-4 flex justify-between">
        <h1 className="font-bold">Expense Manager</h1>
        <div className="flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/auth">Signup</Link>
          <Link to="/auth">Login</Link>
          {/* <Link to="/auth">Auth</Link>
           Add this link */}
          {/* In a real app, you'd conditionally show these based on user role */}
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/employee">Employee</Link>
          <Link to="/manager">Manager</Link>
          <Link to="/admin">Admin</Link>
        </div>
      </nav>

      {/* Routes */}
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Landing />} />
          {/* <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} /> */}
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/dashboard" element={<Dashboard />} /> 
          <Route path="/employee" element={<EmployeeDashboard />} />
          <Route path="/manager" element={<ManagerDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;