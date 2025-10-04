import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DollarSign, LogOut, Plus, TrendingUp, Users, Clock } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("expenses");
  const [user, setUser] = useState({
    first_name: "John",
    last_name: "Doe",
    role: "admin"
  });

  // Check if user is logged in (simple frontend check)
  useEffect(() => {
    // You could check for a token in localStorage or just assume user is logged in
    // since they reached the dashboard
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      navigate("/auth");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate("/auth");
  };

  const stats = {
    totalExpenses: 12,
    pendingExpenses: 3,
    approvedExpenses: 9,
    totalAmount: 1250.75,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="border-b bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-lg bg-blue-600 flex items-center justify-center shadow-sm">
              <DollarSign className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Expense Management</h1>
              <p className="text-sm text-gray-600">
                Welcome, {user.first_name} {user.last_name}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-medium">
              {user.role}
            </span>
            <button 
              onClick={handleLogout}
              className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Stats Cards */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-4 md:grid-cols-4 mb-8">
          {/* Total Expenses Card */}
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-700">Total Expenses</h3>
              <TrendingUp className="h-4 w-4 text-gray-500" />
            </div>
            <div className="text-2xl font-bold">{stats.totalExpenses}</div>
          </div>

          {/* Pending Card */}
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-700">Pending</h3>
              <Clock className="h-4 w-4 text-yellow-500" />
            </div>
            <div className="text-2xl font-bold text-yellow-600">{stats.pendingExpenses}</div>
          </div>

          {/* Approved Card */}
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-700">Approved</h3>
              <Plus className="h-4 w-4 text-green-500" />
            </div>
            <div className="text-2xl font-bold text-green-600">{stats.approvedExpenses}</div>
          </div>

          {/* Total Amount Card */}
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-700">Total Amount</h3>
              <DollarSign className="h-4 w-4 text-gray-500" />
            </div>
            <div className="text-2xl font-bold">${stats.totalAmount.toFixed(2)}</div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="mb-6">
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab("expenses")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === "expenses" 
                  ? "bg-white text-blue-600 shadow-sm" 
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              My Expenses
            </button>
            <button
              onClick={() => setActiveTab("submit")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === "submit" 
                  ? "bg-white text-blue-600 shadow-sm" 
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Submit Expense
            </button>
            {(user.role === "admin" || user.role === "manager") && (
              <button
                onClick={() => setActiveTab("approvals")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === "approvals" 
                    ? "bg-white text-blue-600 shadow-sm" 
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Approvals
              </button>
            )}
            {user.role === "admin" && (
              <button
                onClick={() => setActiveTab("users")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === "users" 
                    ? "bg-white text-blue-600 shadow-sm" 
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Users
              </button>
            )}
          </div>
        </div>

        {/* Tab Content */}
        <div className="space-y-4">
          {/* My Expenses Tab */}
          {activeTab === "expenses" && (
            <div className="bg-white rounded-lg shadow-md border p-6">
              <h2 className="text-xl font-bold mb-2">Your Expenses</h2>
              <p className="text-gray-600 mb-4">View and manage your submitted expenses</p>
              <div className="text-center py-8 text-gray-500">
                <DollarSign className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <p>No expenses submitted yet</p>
                <button 
                  onClick={() => setActiveTab("submit")}
                  className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Submit Your First Expense
                </button>
              </div>
            </div>
          )}

          {/* Submit Expense Tab */}
          {activeTab === "submit" && (
            <div className="bg-white rounded-lg shadow-md border p-6">
              <h2 className="text-xl font-bold mb-2">Submit New Expense</h2>
              <p className="text-gray-600 mb-4">Fill in the details of your expense claim</p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Expense Title</label>
                  <input 
                    type="text" 
                    placeholder="Dinner with client"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
                  <input 
                    type="number" 
                    placeholder="0.00"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <textarea 
                    placeholder="Brief description of the expense..."
                    rows="3"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button className="w-full bg-blue-600 text-white p-3 rounded-lg font-medium hover:bg-blue-700">
                  Submit Expense
                </button>
              </div>
            </div>
          )}

          {/* Other tabs with sample content */}
          {activeTab === "approvals" && (
            <div className="bg-white rounded-lg shadow-md border p-6">
              <h2 className="text-xl font-bold mb-2">Pending Approvals</h2>
              <p className="text-gray-600 mb-4">Review and approve expense claims</p>
              <div className="text-center py-8 text-gray-500">
                No pending approvals
              </div>
            </div>
          )}

          {activeTab === "users" && (
            <div className="bg-white rounded-lg shadow-md border p-6">
              <h2 className="text-xl font-bold mb-2">User Management</h2>
              <p className="text-gray-600 mb-4">Manage company users and roles</p>
              <div className="text-center py-8 text-gray-500">
                User management interface would go here
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;