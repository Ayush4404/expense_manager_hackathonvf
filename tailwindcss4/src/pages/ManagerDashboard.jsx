import PendingApprovals from "../components/Manager/PendingApprovals";
import ApprovalsTable from "../components/Manager/ApprovalTable";
export default function ManagerDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Manager Dashboard</h1>
      <PendingApprovals />
      {/* <ApprovalsTable /> */}
    </div>
  );
}
