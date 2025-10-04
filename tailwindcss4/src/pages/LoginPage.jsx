import { DollarSign } from "lucide-react";

export default function LoginPage() {
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
          <p className="text-gray-600">Sign in to your account</p>
        </div>

        {/* Tabs */}
        <div className="px-8">
          <div className="grid grid-cols-2 gap-2 p-1 bg-gray-100 rounded-lg mb-6">
            <button className="py-3 px-4 bg-white text-blue-600 rounded-lg shadow-sm text-sm font-medium">
              Login
            </button>
            <button className="py-3 px-4 text-gray-600 rounded-lg text-sm font-medium hover:text-gray-900">
              Sign Up
            </button>
          </div>
        </div>

        {/* Form Section */}
        <div className="px-8 pb-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <button className="w-full bg-blue-600 text-white p-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}