import { useState } from "react";
import { Settings, Plus, X, Percent, UserCheck, Users } from "lucide-react";

export default function ApprovalRulesForm() {
  const [rule, setRule] = useState({
    type: "percentage",
    category: "travel",
    approvers: ["Manager"],
    minApprovalPercent: 50,
    specificApprover: "",
  });

  const categories = [
    { value: "travel", label: "Travel" },
    { value: "meals", label: "Meals" },
    { value: "office", label: "Office Supplies" },
    { value: "software", label: "Software" },
    { value: "equipment", label: "Equipment" },
    { value: "other", label: "Other" }
  ];

  const handleChange = (e) => {
    setRule({ ...rule, [e.target.name]: e.target.value });
  };

  const handleApproverChange = (index, value) => {
    const updated = [...rule.approvers];
    updated[index] = value;
    setRule({ ...rule, approvers: updated });
  };

  const addApprover = () => {
    setRule({ ...rule, approvers: [...rule.approvers, ""] });
  };

  const removeApprover = (index) => {
    setRule({ ...rule, approvers: rule.approvers.filter((_, i) => i !== index) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Approval Rule (${rule.type}) saved successfully!`);
  };

  const ruleTypeConfig = {
    percentage: { icon: Percent, label: "Percentage Rule", description: "Requires approval from a percentage of approvers" },
    specific: { icon: UserCheck, label: "Specific Approver", description: "Requires approval from specific individuals" },
    hybrid: { icon: Users, label: "Hybrid Rule", description: "Combines percentage and specific approver requirements" }
  };

  const RuleIcon = ruleTypeConfig[rule.type].icon;

  return (
    <div className="bg-white rounded-2xl shadow-lg border">
      {/* Header */}
      <div className="p-6 border-b">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <Settings className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">Approval Rules</h2>
            <p className="text-gray-600 mt-1">Configure approval workflows for different expense types</p>
          </div>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        {/* Rule Type */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Rule Type
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.entries(ruleTypeConfig).map(([type, config]) => {
              const IconComponent = config.icon;
              return (
                <button
                  key={type}
                  type="button"
                  onClick={() => setRule({ ...rule, type })}
                  className={`p-4 border-2 rounded-lg text-left transition-colors ${
                    rule.type === type
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <IconComponent className="h-6 w-6 mb-2 text-blue-600" />
                  <h3 className="font-semibold text-gray-900">{config.label}</h3>
                  <p className="text-sm text-gray-600 mt-1">{config.description}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Expense Category */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Expense Category
          </label>
          <select
            name="category"
            value={rule.category}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>

        {/* Approvers */}
        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-700">
            Approvers
          </label>
          <div className="space-y-2">
            {rule.approvers.map((approver, i) => (
              <div key={i} className="flex gap-2">
                <input
                  type="text"
                  value={approver}
                  onChange={(e) => handleApproverChange(i, e.target.value)}
                  className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={`Approver ${i + 1} name or role`}
                />
                {rule.approvers.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeApprover(i)}
                    className="p-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={addApprover}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
          >
            <Plus className="h-4 w-4" />
            <span>Add Approver</span>
          </button>
        </div>

        {/* Conditional Fields */}
        {(rule.type === "percentage" || rule.type === "hybrid") && (
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Minimum Approval Percentage
            </label>
            <div className="relative">
              <input
                type="number"
                name="minApprovalPercent"
                value={rule.minApprovalPercent}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pl-12"
                min="1"
                max="100"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <Percent className="h-5 w-5 text-gray-400" />
              </div>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                %
              </div>
            </div>
          </div>
        )}

        {(rule.type === "specific" || rule.type === "hybrid") && (
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Specific Approver
            </label>
            <div className="relative">
              <UserCheck className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                name="specificApprover"
                value={rule.specificApprover}
                onChange={handleChange}
                className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., CFO, Department Head"
              />
            </div>
          </div>
        )}

        {/* Save Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Save Rule
        </button>
      </form>
    </div>
  );
}