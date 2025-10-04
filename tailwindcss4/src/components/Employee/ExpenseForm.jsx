import { useState } from "react";
import { DollarSign, Upload, Calendar, FileText } from "lucide-react";

export default function ExpenseForm() {
  const [form, setForm] = useState({
    amount: "",
    currency: "USD",
    category: "meals",
    description: "",
    date: "",
    receipt: null,
  });

  const categories = [
    { value: "travel", label: "Travel" },
    { value: "meals", label: "Meals" },
    { value: "office", label: "Office Supplies" },
    { value: "software", label: "Software" },
    { value: "equipment", label: "Equipment" },
    { value: "other", label: "Other" }
  ];

  const currencies = ["USD", "EUR", "GBP", "JPY", "AUD", "CAD"];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "receipt") {
      setForm({ ...form, receipt: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Expense Submitted:", form);
    alert("Expense submitted successfully!");
    setForm({
      amount: "",
      currency: "USD",
      category: "meals",
      description: "",
      date: "",
      receipt: null,
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border">
      {/* Header */}
      <div className="p-6 border-b">
        <h2 className="text-xl font-bold text-gray-900">Submit New Expense</h2>
        <p className="text-gray-600 mt-1">Fill in the details of your expense claim</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        {/* Amount + Currency Row */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Amount *
            </label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="number"
                name="amount"
                value={form.amount}
                onChange={handleChange}
                placeholder="0.00"
                step="0.01"
                min="0"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Currency *
            </label>
            <select
              name="currency"
              value={form.currency}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {currencies.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Category */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Category *
          </label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Description *
          </label>
          <div className="relative">
            <FileText className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Brief description of the expense..."
              rows="3"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
              required
            />
          </div>
        </div>

        {/* Date */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Date *
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        </div>

        {/* Receipt Upload */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Upload Receipt (Optional)
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
            <input
              type="file"
              name="receipt"
              accept="image/*,.pdf"
              onChange={handleChange}
              className="hidden"
              id="receipt-upload"
            />
            <label htmlFor="receipt-upload" className="cursor-pointer">
              <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-600">
                Click to upload receipt or drag and drop
              </p>
              <p className="text-xs text-gray-500 mt-1">
                PNG, JPG, PDF up to 10MB
              </p>
            </label>
          </div>
          {form.receipt && (
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center space-x-2">
                <FileText className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-800">
                  {form.receipt.name}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setForm({ ...form, receipt: null })}
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Remove
              </button>
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit Expense
        </button>
      </form>
    </div>
  );
}