import { useState } from "react";
import { Users, UserPlus, Mail, Shield, Edit3, Trash2 } from "lucide-react";

export default function UserTable() {
  const [users, setUsers] = useState([
    { id: 1, name: "Aman Sharma", email: "aman@example.com", role: "employee" },
    { id: 2, name: "Priya Patel", email: "priya@example.com", role: "manager" },
    { id: 3, name: "Rahul Kumar", email: "rahul@example.com", role: "admin" },
    { id: 4, name: "Neha Singh", email: "neha@example.com", role: "employee" },
  ]);

  const [newUser, setNewUser] = useState({ name: "", email: "", role: "employee" });
  const [isAdding, setIsAdding] = useState(false);

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const addUser = (e) => {
    e.preventDefault();
    const id = users.length + 1;
    setUsers([...users, { id, ...newUser }]);
    setNewUser({ name: "", email: "", role: "employee" });
    setIsAdding(false);
  };

  const updateRole = (id, role) => {
    setUsers(users.map((u) => (u.id === id ? { ...u, role } : u)));
  };

  const deleteUser = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter(u => u.id !== id));
    }
  };

  const roleConfig = {
    admin: { color: "bg-purple-100 text-purple-800", label: "Admin" },
    manager: { color: "bg-green-100 text-green-800", label: "Manager" },
    employee: { color: "bg-blue-100 text-blue-800", label: "Employee" }
  };

  const getRoleCount = (role) => users.filter(u => u.role === role).length;

  return (
    <div className="bg-white rounded-2xl shadow-lg border">
      {/* Header */}
      <div className="p-6 border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Users className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">User Management</h2>
              <p className="text-gray-600 mt-1">Manage team members and their roles</p>
            </div>
          </div>
          <button
            onClick={() => setIsAdding(!isAdding)}
            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <UserPlus className="h-4 w-4" />
            <span>Add User</span>
          </button>
        </div>
      </div>

      {/* Add User Form */}
      {isAdding && (
        <div className="p-6 border-b bg-gray-50">
          <form onSubmit={addUser} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={newUser.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Full name"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={newUser.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="email@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Role</label>
                <select
                  name="role"
                  value={newUser.role}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="employee">Employee</option>
                  <option value="manager">Manager</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Add User
              </button>
              <button
                type="button"
                onClick={() => setIsAdding(false)}
                className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Stats */}
      <div className="p-6 border-b bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Users className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Users</p>
              <p className="text-lg font-semibold text-gray-900">{users.length}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Shield className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Admins</p>
              <p className="text-lg font-semibold text-purple-600">{getRoleCount('admin')}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Edit3 className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Managers</p>
              <p className="text-lg font-semibold text-green-600">{getRoleCount('manager')}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <UserPlus className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Employees</p>
              <p className="text-lg font-semibold text-blue-600">{getRoleCount('employee')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b">User</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b">Email</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b">Role</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="font-semibold text-blue-600">
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <span className="font-medium text-gray-900">{user.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Mail className="h-4 w-4" />
                      <span>{user.email}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <select
                      value={user.role}
                      onChange={(e) => updateRole(user.id, e.target.value)}
                      className={`px-3 py-1 rounded-full text-sm font-medium border ${roleConfig[user.role].color} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    >
                      <option value="employee">Employee</option>
                      <option value="manager">Manager</option>
                      <option value="admin">Admin</option>
                    </select>
                  </td>
                  <td className="px-4 py-4">
                    <button
                      onClick={() => deleteUser(user.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}