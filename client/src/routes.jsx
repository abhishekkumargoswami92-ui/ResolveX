import { Routes, Route } from "react-router-dom";
import { StudentRoute, AdminRoute } from "./ProtectedRoutes";


// Public
import Landing from "./pages/public/Landing";

// Auth
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

// Student
import StudentDashboard from "./pages/student/Dashboard";
import ReportIssue from "./pages/student/ReportIssue";
import MyIssues from "./pages/student/MyIssues";
import IssueDetail from "./pages/student/IssueDetail";
import StudentAnnouncements from "./pages/student/Announcements";
import LostAndFound from "./pages/student/LostAndFound";
import ReportLost from "./pages/student/ReportLost";
import ReportFound from "./pages/student/ReportFound";
import IssuesFeed from "./pages/student/IssuesFeed";
import MyAccount from "./pages/student/MyAccount";
import AdminDashboard from "./pages/admin/Dashboard";
import ManageIssues from "./pages/admin/ManageIssues";
import IssueDetailAdmin from "./pages/admin/IssueDetail";
import AdminAnnouncements from "./pages/admin/Announcements";
import Analytics from "./pages/admin/Analytics";
import LostAndFoundAdmin from "./pages/admin/LostAndFoundAdmin";
import AddAnnouncement from "./pages/admin/AddAnnouncement";


const AppRoutes = () => {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Landing />} />

      {/* Auth */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Student */}
      <Route path="/student/dashboard" element={<StudentDashboard />} />
      <Route path="/student/report" element={<ReportIssue />} />
      <Route path="/student/issues" element={<MyIssues />} />
      <Route path="/student/issues/:id" element={<IssueDetail />} />
      <Route path="/student/announcements" element={<StudentAnnouncements />} />
      <Route path="/student/lost-found" element={<LostAndFound />} />
      <Route path="/student/lost-found/report-lost" element={<ReportLost />} />
      <Route path="/student/lost-found/report-found" element={<ReportFound />} />
  ️    <Route path="student/issues/feed" element={<IssuesFeed />} />
      <Route path="/student/account" element={<MyAccount />} />

      {/* Admin */}
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/manage-issues" element={<ManageIssues />} />
      <Route path="/admin/manage-issues/:id" element={<IssueDetailAdmin />} />
      <Route path="/admin/announcements" element={<AdminAnnouncements />} />
      <Route path="/admin/analytics" element={<Analytics />} />
      <Route path="/admin/lost-found" element={<LostAndFoundAdmin />} />
      <Route path="/admin/announcements/add" element={<AddAnnouncement />} />
    </Routes>
  );
};

export default AppRoutes;
