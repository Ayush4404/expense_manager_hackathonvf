import { useState, useEffect } from "react";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";

const ExpenseList = ({ profileId, viewMode, onApprovalChange }) => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedExpense, setSelectedExpense] = useState(null);
  const [comments, setComments] = useState("");
  const [actionLoading, setActionLoading] = useState(false);

  // Mock data for demonstration
  const mockExpenses = [
    {
      id: "1",
      title: "Client Dinner",
      description: "Business dinner with potential client",
      amount: 120.50,
      original_currency: "USD",
      category: "meals",
      status: "pending",
      submission_date: new Date().toISOString(),
      employee_id: "1",
      profiles: {
        first_name: "John",
        last_name: "Doe"
      }
    },
    {
      id: "2",
      title: "Flight to Conference",
      description: "Round trip flight to tech conference",
      amount: 450.00,
      original_currency: "USD",
      category: "travel",
      status: "approved",
      submission_date: new Date().toISOString(),
      employee_id: "1",
      profiles: {
        first_name: "John",
        last_name: "Doe"
      }
    },
    {
      id: "3",
      title: "Software License",
      description: "Annual subscription for design software",
      amount: 299.99,
      original_currency: "USD",
      category: "software",
      status: "pending",
      submission_date: new Date().toISOString(),
      employee_id: "2",
      profiles: {
        first_name: "Jane",
        last_name: "Smith"
      }
    }
  ];

  useEffect(() => {
    loadExpenses();
  }, [profileId, viewMode]);

  const loadExpenses = async () => {
    setLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      if (viewMode === "own") {
        // Show only current user's expenses
        setExpenses(mockExpenses.filter(expense => expense.employee_id === profileId));
      } else {
        // Show pending expenses for approval
        setExpenses(mockExpenses.filter(expense => expense.status === "pending"));
      }
      setLoading(false);
    }, 500);
  };

  const handleAction = async (expenseId, action) => {
    setActionLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      // Update the expense status in our mock data
      setExpenses(prev => 
        prev.map(expense => 
          expense.id === expenseId 
            ? { ...expense, status: action }
            : expense
        )
      );
      
      alert(`Expense ${action} successfully!`);
      setSelectedExpense(null);
      setComments("");
      setActionLoading(false);
      onApprovalChange?.();
    }, 1000);
  };

  const getStatusBadge = (status) => {
    const statusColors = {
      draft: "bg-gray-100 text-gray-800",
      pending: "bg-yellow-100 text-yellow-800",
      approved: "bg-green-100 text-green-800",
      rejected: "bg-red-100 text-red-800",
      reimbursed: "bg-blue-100 text-blue-800",
    };

    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[status] || "bg-gray-100"}`}>
        {status}
      </span>
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center py-8">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </div>
    );
  }

  if (expenses.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        {viewMode === "own" ? "No expenses found" : "No pending approvals"}
      </div>
    );
  }

  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-50">
              {viewMode === "approve" && <th className="border border-gray-200 px-4 py-2 text-left text-sm font-medium">Employee</th>}
              <th className="border border-gray-200 px-4 py-2 text-left text-sm font-medium">Title</th>
              <th className="border border-gray-200 px-4 py-2 text-left text-sm font-medium">Category</th>
              <th className="border border-gray-200 px-4 py-2 text-left text-sm font-medium">Amount</th>
              <th className="border border-gray-200 px-4 py-2 text-left text-sm font-medium">Status</th>
              <th className="border border-gray-200 px-4 py-2 text-left text-sm font-medium">Date</th>
              {viewMode === "approve" && <th className="border border-gray-200 px-4 py-2 text-left text-sm font-medium">Actions</th>}
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id} className="hover:bg-gray-50">
                {viewMode === "approve" && (
                  <td className="border border-gray-200 px-4 py-2">
                    {expense.profiles.first_name} {expense.profiles.last_name}
                  </td>
                )}
                <td className="border border-gray-200 px-4 py-2 font-medium">{expense.title}</td>
                <td className="border border-gray-200 px-4 py-2 capitalize">{expense.category}</td>
                <td className="border border-gray-200 px-4 py-2">
                  {expense.original_currency} {expense.amount.toFixed(2)}
                </td>
                <td className="border border-gray-200 px-4 py-2">{getStatusBadge(expense.status)}</td>
                <td className="border border-gray-200 px-4 py-2">
                  {expense.submission_date
                    ? new Date(expense.submission_date).toLocaleDateString()
                    : "-"}
                </td>
                {viewMode === "approve" && (
                  <td className="border border-gray-200 px-4 py-2">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setSelectedExpense(expense)}
                        className="p-1 border border-green-200 text-green-600 rounded hover:bg-green-50"
                      >
                        <CheckCircle className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => setSelectedExpense(expense)}
                        className="p-1 border border-red-200 text-red-600 rounded hover:bg-red-50"
                      >
                        <XCircle className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Approval Dialog */}
      {selectedExpense && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="mb-4">
              <h3 className="text-lg font-bold">Review Expense</h3>
              <p className="text-gray-600">
                {selectedExpense.title} - {selectedExpense.original_currency}{" "}
                {selectedExpense.amount.toFixed(2)}
              </p>
            </div>
            
            <div className="space-y-4 mb-4">
              <div>
                <p className="text-sm font-medium mb-1">Description</p>
                <p className="text-sm text-gray-600">
                  {selectedExpense.description || "No description"}
                </p>
              </div>
              <div>
                <label className="text-sm font-medium block mb-1">Comments (optional)</label>
                <textarea
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  placeholder="Add any comments..."
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="3"
                />
              </div>
            </div>
            
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setSelectedExpense(null)}
                disabled={actionLoading}
                className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                onClick={() => handleAction(selectedExpense.id, "rejected")}
                disabled={actionLoading}
                className="px-4 py-2 border border-red-300 text-red-600 rounded hover:bg-red-50 disabled:opacity-50"
              >
                {actionLoading && <Loader2 className="inline h-4 w-4 animate-spin mr-2" />}
                Reject
              </button>
              <button
                onClick={() => handleAction(selectedExpense.id, "approved")}
                disabled={actionLoading}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
              >
                {actionLoading && <Loader2 className="inline h-4 w-4 animate-spin mr-2" />}
                Approve
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ExpenseList;