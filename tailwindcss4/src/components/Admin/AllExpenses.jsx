import { useState } from "react";
import { CheckCircle, XCircle, Clock, User, DollarSign, Calendar, Filter, TrendingUp } from "lucide-react";

export default function AllExpenses() {
  const [expenses] = useState([
    {
      id: 1,
      employee: "Aman Sharma",
      description: "Lunch with Client - Business Meeting",
      amount: 1200,
      currency: "INR",
      date: "2025-10-01",
      category: "meals",
      status: "pending",
    },
    {
      id: 2,
      employee: "Priya Patel",
      description: "Flight Ticket - Conference Travel",
      amount: 15000,
      currency: "INR",
      date: "2025-09-28",
      category: "travel",
      status: "approved",
    },
    {
      id: 3,
      employee: "Ravi Kumar",
      description: "Hotel Stay - Project Site Visit",
      amount: 8000,
      currency: "INR",
      date: "2025-09-25",
      category: "travel",
      status: "rejected",
    },
    {
      id: 4,
      employee: "Neha Singh",
      description: "Software License - Design Tools",
      amount: 4500,
      currency: "INR",
      date: "2025-09-20",
      category: "software",
      status: "approved",
    },
  ]);

  const [filter, setFilter] = useState("all");

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

  const filteredExpenses = filter === "all" 
    ? expenses 
    : expenses.filter(exp => exp.status === filter);

  const formatCurrency = (amount, currency) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: currency,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const getStatusCount = (status) => expenses.filter(exp => exp.status === status).length;

  return (
    <div className="bg-white rounded-2xl shadow-lg border">
      {/* Header */}
      <div className="p-6 border-b">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900">All Employee Expenses</h2>
            <p className="text-gray-600 mt-1">Overview of all expense submissions</p>
          </div>
          <div className="flex items-center space-x-3">
            <Filter className="h-5 w-5 text-gray-400" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            >
              <option value="all">All Status</option>
              <option value="approved">Approved</option>
              <option value="pending">Pending</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="p-6 border-b bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Expenses</p>
              <p className="text-lg font-semibold text-gray-900">{expenses.length}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Approved</p>
              <p className="text-lg font-semibold text-green-600">{getStatusCount('approved')}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Clock className="h-5 w-5 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Pending</p>
              <p className="text-lg font-semibold text-yellow-600">{getStatusCount('pending')}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
              <XCircle className="h-5 w-5 text-red-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Rejected</p>
              <p className="text-lg font-semibold text-red-600">{getStatusCount('rejected')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="p-6">
        {filteredExpenses.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Filter className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No expenses found</h3>
            <p className="text-gray-500">Try changing your filter criteria</p>
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
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredExpenses.map((expense) => {
                  const StatusIcon = statusConfig[expense.status].icon;
                  return (
                    <tr key={expense.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                            <User className="h-4 w-4 text-blue-600" />
                          </div>
                          <span className="font-medium text-gray-900">{expense.employee}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <div className="max-w-xs">
                          <p className="text-gray-900 font-medium">{expense.description}</p>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">{categoryIcons[expense.category] || "📦"}</span>
                          <span className="text-sm text-gray-600 capitalize">{expense.category}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <span className="font-semibold text-gray-900">
                          {formatCurrency(expense.amount, expense.currency)}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center space-x-1 text-sm text-gray-600">
                          <Calendar className="h-4 w-4" />
                          <span>
                            {new Date(expense.date).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric'
                            })}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${statusConfig[expense.status].color}`}>
                          <StatusIcon className="h-3 w-3 mr-1" />
                          {statusConfig[expense.status].label}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* Summary */}
        {filteredExpenses.length > 0 && (
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex justify-between items-center text-sm text-gray-600">
              <span>Showing {filteredExpenses.length} expenses</span>
              <div className="flex space-x-4">
                <span className="font-medium">
                  Total: {formatCurrency(
                    filteredExpenses.reduce((sum, exp) => sum + exp.amount, 0),
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