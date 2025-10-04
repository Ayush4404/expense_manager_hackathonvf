import { useState } from "react";
import { CheckCircle, XCircle, User, DollarSign, FileText, Clock, TrendingUp } from "lucide-react";

export default function ApprovalsTable() {
  const [requests, setRequests] = useState([
    { 
      id: 1, 
      employee: "Aman Sharma", 
      description: "Hotel Stay - Business Conference", 
      amount: 3000, 
      currency: "INR",
      category: "travel",
      date: "2025-10-15",
      status: "pending" 
    },
    { 
      id: 2, 
      employee: "Priya Patel", 
      description: "Team Lunch - Project Kickoff", 
      amount: 1800, 
      currency: "INR",
      category: "meals",
      date: "2025-10-14",
      status: "pending" 
    },
    { 
      id: 3, 
      employee: "Rahul Kumar", 
      description: "Software Subscription", 
      amount: 4500, 
      currency: "INR",
      category: "software",
      date: "2025-10-13",
      status: "pending" 
    },
    { 
      id: 4, 
      employee: "Neha Singh", 
      description: "Cab Fare - Client Visit", 
      amount: 650, 
      currency: "INR",
      category: "travel",
      date: "2025-10-12",
      status: "pending" 
    },
  ]);

  const handleAction = (id, action) => {
    setRequests(requests.map(req => 
      req.id === id ? { ...req, status: action } : req
    ));
    alert(`Expense ${action} successfully!`);
  };

  const categoryIcons = {
    travel: "✈️",
    meals: "🍽️",
    office: "🏢",
    software: "💻",
    equipment: "🖥️",
    other: "📦"
  };

  const formatCurrency = (amount, currency) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: currency,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const pendingRequests = requests.filter(req => req.status === 'pending');
  const totalPendingAmount = pendingRequests.reduce((sum, req) => sum + req.amount, 0);

  return (
    <div className="bg-white rounded-2xl shadow-lg border">
      {/* Header */}
      <div className="p-6 border-b">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Approvals to Review</h2>
            <p className="text-gray-600 mt-1">Manage expense approvals for your team</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm text-gray-600">Pending Requests</p>
              <p className="text-2xl font-bold text-yellow-600">{pendingRequests.length}</p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Clock className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="p-6 border-b bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Pending</p>
              <p className="text-lg font-semibold text-gray-900">{pendingRequests.length} requests</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <DollarSign className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Amount</p>
              <p className="text-lg font-semibold text-gray-900">{formatCurrency(totalPendingAmount, "INR")}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <User className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Employees</p>
              <p className="text-lg font-semibold text-gray-900">
                {new Set(pendingRequests.map(req => req.employee)).size}
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <FileText className="h-5 w-5 text-orange-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Avg. Amount</p>
              <p className="text-lg font-semibold text-gray-900">
                {formatCurrency(pendingRequests.length ? totalPendingAmount / pendingRequests.length : 0, "INR")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="p-6">
        {pendingRequests.length === 0 ? (
          <div className="text-center py-12">
            <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">All caught up!</h3>
            <p className="text-gray-500">No pending approvals to review.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b">Employee</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b">Description</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b">Category</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b">Amount</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b">Date</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {pendingRequests.map((request) => (
                  <tr key={request.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          <User className="h-4 w-4 text-blue-600" />
                        </div>
                        <span className="font-medium text-gray-900">{request.employee}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="max-w-xs">
                        <p className="text-gray-900 font-medium">{request.description}</p>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{categoryIcons[request.category] || "📦"}</span>
                        <span className="text-sm text-gray-600 capitalize">{request.category}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <span className="font-semibold text-gray-900">
                        {formatCurrency(request.amount, request.currency)}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <span className="text-sm text-gray-600">
                        {new Date(request.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric'
                        })}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleAction(request.id, "approved")}
                          className="flex items-center space-x-1 bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                        >
                          <CheckCircle className="h-4 w-4" />
                          <span>Approve</span>
                        </button>
                        <button
                          onClick={() => handleAction(request.id, "rejected")}
                          className="flex items-center space-x-1 bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
                        >
                          <XCircle className="h-4 w-4" />
                          <span>Reject</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Summary Footer */}
        {pendingRequests.length > 0 && (
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex justify-between items-center text-sm text-gray-600">
              <span>Showing {pendingRequests.length} pending requests</span>
              <div className="flex space-x-4">
                <span className="font-medium">
                  Total: {formatCurrency(totalPendingAmount, "INR")}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}