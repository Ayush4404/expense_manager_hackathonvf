import { useState } from "react";
import { CheckCircle, XCircle, Clock, User, Calendar, DollarSign, MessageCircle } from "lucide-react";

export default function PendingApprovals() {
  const [requests, setRequests] = useState([
    {
      id: 1,
      employee: "Aman Sharma",
      description: "Hotel Stay - Business Trip to Delhi",
      amount: 4500,
      currency: "INR",
      date: "2025-10-02",
      category: "travel",
      status: "pending",
      comment: "",
    },
    {
      id: 2,
      employee: "Priya Patel",
      description: "Cab Fare - Client Meeting",
      amount: 600,
      currency: "INR",
      date: "2025-10-03",
      category: "travel",
      status: "pending",
      comment: "",
    },
    {
      id: 3,
      employee: "Rahul Kumar",
      description: "Team Lunch - Project Completion",
      amount: 2500,
      currency: "INR",
      date: "2025-10-01",
      category: "meals",
      status: "pending",
      comment: "",
    },
  ]);

  const [selectedRequest, setSelectedRequest] = useState(null);
  const [actionLoading, setActionLoading] = useState(false);

  const handleCommentChange = (id, value) => {
    setRequests(
      requests.map((r) =>
        r.id === id ? { ...r, comment: value } : r
      )
    );
  };

  const handleAction = async (id, action) => {
    setActionLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      setRequests(
        requests.map((r) =>
          r.id === id
            ? { ...r, status: action }
            : r
        )
      );
      setSelectedRequest(null);
      setActionLoading(false);
      alert(`Expense #${id} ${action} successfully!`);
    }, 1000);
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

  return (
    <div className="bg-white rounded-2xl shadow-lg border">
      {/* Header */}
      <div className="p-6 border-b">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Pending Approvals</h2>
            <p className="text-gray-600 mt-1">Review and approve expense claims from your team</p>
          </div>
          <div className="flex items-center space-x-2 bg-yellow-100 text-yellow-800 px-3 py-2 rounded-full">
            <Clock className="h-4 w-4" />
            <span className="text-sm font-medium">{pendingRequests.length} pending</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {pendingRequests.length === 0 ? (
          <div className="text-center py-12">
            <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">All caught up!</h3>
            <p className="text-gray-500">No pending approvals at the moment.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {pendingRequests.map((request) => (
              <div
                key={request.id}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3 flex-1">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-xl">{categoryIcons[request.category] || "📦"}</span>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-semibold text-gray-900">
                          {request.description}
                        </h3>
                        <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full capitalize">
                          {request.category}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{request.employee}</span>
                        </div>
                        
                        <div className="flex items-center space-x-1">
                          <DollarSign className="h-4 w-4" />
                          <span className="font-medium text-gray-900">
                            {formatCurrency(request.amount, request.currency)}
                          </span>
                        </div>
                        
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>
                            {new Date(request.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </span>
                        </div>
                      </div>

                      {/* Comment Input */}
                      <div className="flex items-start space-x-2">
                        <MessageCircle className="h-4 w-4 text-gray-400 mt-1 flex-shrink-0" />
                        <input
                          type="text"
                          value={request.comment}
                          onChange={(e) => handleCommentChange(request.id, e.target.value)}
                          className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                          placeholder="Add a comment (optional)..."
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex-shrink-0 ml-4 flex space-x-2">
                    <button
                      onClick={() => handleAction(request.id, "approved")}
                      className="flex items-center space-x-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                    >
                      <CheckCircle className="h-4 w-4" />
                      <span>Approve</span>
                    </button>
                    <button
                      onClick={() => handleAction(request.id, "rejected")}
                      className="flex items-center space-x-1 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
                    >
                      <XCircle className="h-4 w-4" />
                      <span>Reject</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Summary */}
        {pendingRequests.length > 0 && (
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex justify-between items-center text-sm text-gray-600">
              <span>Total pending: {pendingRequests.length} requests</span>
              <div className="flex space-x-4">
                <span className="font-medium">
                  Total amount: {formatCurrency(
                    pendingRequests.reduce((sum, req) => sum + req.amount, 0),
                    "INR"
                  )}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}