import { useState } from "react";
import { CheckCircle, XCircle, Clock, DollarSign, Calendar, FileText } from "lucide-react";

export default function ExpenseHistory() {
  const [expenses] = useState([
    {
      id: 1,
      title: "Lunch with Client",
      description: "Business lunch meeting with potential client",
      amount: 1200,
      currency: "USD",
      category: "meals",
      date: "2025-10-01",
      status: "pending",
    },
    {
      id: 2,
      title: "Flight to Conference",
      description: "Round trip flight to annual tech conference",
      amount: 450.00,
      currency: "USD",
      category: "travel",
      date: "2025-09-28",
      status: "approved",
    },
    {
      id: 3,
      title: "Hotel Accommodation",
      description: "3-night stay during business trip",
      amount: 800.00,
      currency: "USD",
      category: "travel",
      date: "2025-09-25",
      status: "rejected",
    },
    {
      id: 4,
      title: "Software License",
      description: "Annual subscription for design software",
      amount: 299.99,
      currency: "USD",
      category: "software",
      date: "2025-09-20",
      status: "approved",
    },
  ]);

  const statusConfig = {
    approved: {
      color: "bg-green-100 text-green-800 border-green-200",
      icon: CheckCircle,
      label: "Approved"
    },
    rejected: {
      color: "bg-red-100 text-red-800 border-red-200",
      icon: XCircle,
      label: "Rejected"
    },
    pending: {
      color: "bg-yellow-100 text-yellow-800 border-yellow-200",
      icon: Clock,
      label: "Pending"
    },
  };

  const categoryIcons = {
    travel: "✈️",
    meals: "🍽️",
    office: "🏢",
    software: "💻",
    equipment: "🖥️",
    other: "📦"
  };

  const getStatusBadge = (status) => {
    const config = statusConfig[status];
    const IconComponent = config.icon;
    
    return (
      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${config.color}`}>
        <IconComponent className="h-3 w-3 mr-1" />
        {config.label}
      </span>
    );
  };

  const formatCurrency = (amount, currency) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    }).format(amount);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border">
      {/* Header */}
      <div className="p-6 border-b">
        <h2 className="text-xl font-bold text-gray-900">Your Expenses</h2>
        <p className="text-gray-600 mt-1">View and manage your submitted expenses</p>
      </div>

      {/* Expenses List */}
      <div className="p-6">
        <div className="space-y-4">
          {expenses.map((expense) => (
            <div
              key={expense.id}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3 flex-1">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-lg">{categoryIcons[expense.category] || "📦"}</span>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-semibold text-gray-900 truncate">
                        {expense.title}
                      </h3>
                      <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full capitalize">
                        {expense.category}
                      </span>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                      {expense.description}
                    </p>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <DollarSign className="h-4 w-4" />
                        <span className="font-medium text-gray-900">
                          {formatCurrency(expense.amount, expense.currency)}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {new Date(expense.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex-shrink-0 ml-4">
                  {getStatusBadge(expense.status)}
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex justify-end space-x-2 mt-3 pt-3 border-t border-gray-100">
                <button className="text-sm text-blue-600 hover:text-blue-800 font-medium px-3 py-1 rounded hover:bg-blue-50 transition-colors">
                  View Details
                </button>
                {expense.status === "pending" && (
                  <button className="text-sm text-gray-600 hover:text-gray-800 font-medium px-3 py-1 rounded hover:bg-gray-50 transition-colors">
                    Edit
                  </button>
                )}
                {expense.status === "pending" && (
                  <button className="text-sm text-red-600 hover:text-red-800 font-medium px-3 py-1 rounded hover:bg-red-50 transition-colors">
                    Cancel
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {expenses.length === 0 && (
          <div className="text-center py-12">
            <FileText className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No expenses yet</h3>
            <p className="text-gray-500 mb-4">Submit your first expense to get started</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Submit Expense
            </button>
          </div>
        )}

        {/* Summary */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex justify-between items-center text-sm text-gray-600">
            <span>Total: {expenses.length} expenses</span>
            <div className="flex space-x-4">
              <span className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                Approved: {expenses.filter(e => e.status === 'approved').length}
              </span>
              <span className="flex items-center">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-1"></div>
                Pending: {expenses.filter(e => e.status === 'pending').length}
              </span>
              <span className="flex items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-1"></div>
                Rejected: {expenses.filter(e => e.status === 'rejected').length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}