# Expense Management System

A modern, responsive expense management application built with React and Tailwind CSS that helps organizations streamline their expense reimbursement process.

## 🚀 Features

### 🔐 Authentication & User Management
- **Role-based access control** (Admin, Manager, Employee)
- **Secure authentication flow**
- **User profile management**
- **Role assignment and permissions**

### 💰 Expense Management
- **Submit expenses** with detailed information
- **Receipt upload** support (images/PDF)
- **Multi-currency support** (USD, EUR, GBP, JPY, AUD, CAD, INR)
- **Expense categorization** (Travel, Meals, Office, Software, Equipment, Other)
- **Real-time expense tracking**

### 📊 Approval Workflow
- **Multi-level approval system**
- **Custom approval rules** (Percentage, Specific Approver, Hybrid)
- **Pending approvals dashboard**
- **Approval comments and feedback**
- **Status tracking** (Pending, Approved, Rejected)

### 👥 User Roles

#### 👨‍💼 Employee
- Submit new expense claims
- View personal expense history
- Track approval status
- Upload receipt documents

#### 👨‍💼 Manager
- Approve/reject team expenses
- View team expense reports
- Monitor approval workflows
- Manage subordinate expenses

#### 👨‍💻 Admin
- Full system access
- User management
- Approval rules configuration
- View all organizational expenses
- System analytics and reporting

## 🛠️ Tech Stack

- **Frontend**: React 18, JavaScript, Tailwind CSS
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS with custom design system
- **State Management**: React Hooks (useState, useEffect)

## 📦 Project Structure

```
src/
├── components/
│   ├── Admin/
│   │   ├── UserTable.jsx          # User management interface
│   │   ├── ApprovalRulesForm.jsx  # Approval rules configuration
│   │   └── AllExpenses.jsx        # All expenses overview
│   ├── Employee/
│   │   ├── ExpenseForm.jsx        # Expense submission form
│   │   └── ExpenseHistory.jsx     # Personal expense history
│   ├── Manager/
│   │   └── ApprovalsTable.jsx     # Approval management
│   └── ui/                        # Reusable UI components
├── pages/
│   ├── Auth.jsx                   # Authentication page
│   ├── EmployeeDashboard.jsx      # Employee dashboard
│   ├── ManagerDashboard.jsx       # Manager dashboard
│   ├── AdminDashboard.jsx         # Admin dashboard
│   └── Landing.jsx                # Landing page
└── App.jsx                        # Main application component
```

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#2563eb)
- **Success**: Green (#16a34a)
- **Warning**: Yellow (#ca8a04)
- **Error**: Red (#dc2626)
- **Background**: Gray (#f9fafb)

### Typography
- **Headers**: Inter font family, bold weights
- **Body**: System fonts, regular weights
- **Sizes**: Responsive scaling from sm to 3xl

### Components
- **Cards**: Rounded corners (rounded-2xl), subtle shadows
- **Buttons**: Consistent padding, hover states, focus rings
- **Forms**: Clean inputs with icons, validation states
- **Tables**: Professional styling with hover effects

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd expense-management-system
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

## 📱 Pages Overview

### 🏠 Landing Page
- Hero section with feature highlights
- Business impact statistics
- Call-to-action for getting started

### 🔐 Authentication
- Tab-based login/signup interface
- Company registration for new organizations
- Responsive form design with validation

### 👨‍💼 Employee Dashboard
- **Submit Expense Tab**: Comprehensive expense submission form
- **Expense History Tab**: Personal expense tracking with status
- **Quick Stats**: Overview of submitted expenses

### 👨‍💼 Manager Dashboard
- **Pending Approvals**: Team expense approval interface
- **Expense Overview**: Department-wide expense tracking
- **Approval Workflow**: Multi-level approval management

### 👨‍💻 Admin Dashboard
- **User Management**: Complete user and role administration
- **Approval Rules**: Custom workflow configuration
- **All Expenses**: Organization-wide expense overview
- **Analytics**: System insights and reporting

## 🔧 Key Components

### ExpenseForm
- Multi-field expense submission
- File upload for receipts
- Currency and category selection
- Form validation and error handling

### UserTable
- User listing with role management
- Add/edit user functionality
- Role-based access controls
- Bulk operations support

### ApprovalRulesForm
- Flexible rule configuration
- Multiple approval types
- Category-specific rules
- Approver management

## 🎯 Usage Examples

### Submitting an Expense
1. Navigate to Employee Dashboard
2. Click "Submit Expense"
3. Fill in expense details
4. Upload receipt (optional)
5. Submit for approval

### Approving Expenses
1. Navigate to Manager Dashboard
2. Review pending approvals
3. Add comments if needed
4. Approve or reject expenses

### Managing Users
1. Navigate to Admin Dashboard
2. Access User Management
3. Add new users or modify roles
4. Configure permissions

## 🔒 Security Features

- Role-based access control
- Protected routes
- Form validation
- Input sanitization
- Secure file upload handling

## 📈 Future Enhancements

- [ ] Backend integration with database
- [ ] Email notifications
- [ ] Advanced reporting and analytics
- [ ] Mobile app development
- [ ] Integration with accounting software
- [ ] Multi-language support
- [ ] Dark mode theme

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

Built with ❤️ by the Expense Management Team
