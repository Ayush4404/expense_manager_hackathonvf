import { useState } from "react";
import ExpenseForm from "../components/Employee/ExpenseForm";
import ExpenseHistory from "../components/Employee/ExpenseHistory";

export default function EmployeeDashboard() {
  const [activeTab, setActiveTab] = useState("submit");
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleExpenseSubmitted = () => {
    setRefreshTrigger(prev => prev + 1);
    setActiveTab("history");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Employee Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage your expenses and track submissions</p>
        </div>

        {/* Tabs Navigation */}
        <div className="mb-8">
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit">
            <button
              onClick={() => setActiveTab("submit")}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-colors ${
                activeTab === "submit" 
                  ? "bg-white text-blue-600 shadow-sm" 
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Submit Expense
            </button>
            <button
              onClick={() => setActiveTab("history")}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-colors ${
                activeTab === "history" 
                  ? "bg-white text-blue-600 shadow-sm" 
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Expense History
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="space-y-6">
          {activeTab === "submit" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Form */}
              <div className="lg:col-span-2">
                <ExpenseForm onSuccess={handleExpenseSubmitted} />
              </div>
              
              {/* Quick Tips Sidebar */}
              <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                  <h3 className="font-semibold text-blue-900 mb-3">💡 Quick Tips</h3>
                  <ul className="space-y-2 text-sm text-blue-800">
                    <li>• Include detailed descriptions</li>
                    <li>• Upload clear receipt images</li>
                    <li>• Submit within 30 days of expense</li>
                    <li>• Categorize expenses correctly</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-3">📊 This Month</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Submitted:</span>
                      <span className="font-medium">5 expenses</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Approved:</span>
                      <span className="font-medium text-green-600">$1,250.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Pending:</span>
                      <span className="font-medium text-yellow-600">$450.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "history" && (
            <div>
              <ExpenseHistory key={refreshTrigger} />
            </div>
          )}
        </div>

        {/* Quick Stats Bar */}
        {/* <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-2xl p-4 shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Submitted</p>
                <p className="text-2xl font-bold text-gray-900">12</p>
              </div>
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-600">📄</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Approved</p>
                <p className="text-2xl font-bold text-green-600">8</p>
              </div>
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-green-600">✅</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm border">
            {/* <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-yellow-600">3</p>
              </div>
              <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                <span className="text-yellow-600">⏳</span>
              </div>
            </div> */}
          {/* </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Amount</p>
                <p className="text-2xl font-bold text-gray-900">$2,450</p>
              </div>
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-purple-600">💰</span>
              </div>
            </div>
          </div>
        </div> */} 
      </div>
    </div>
  );
}