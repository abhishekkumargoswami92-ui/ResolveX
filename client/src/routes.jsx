import { Routes, Route, Navigate } from "react-router-dom";

// Public
import Landing from "./pages/public/Landing.jsx";

// Auth
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";

// Student
import StudentDashboard from "./pages/student/Dashboard.jsx";
import ReportIssue from "./pages/student/ReportIssue.jsx";
import MyIssues from "./pages/student/MyIssues.jsx";
import IssueDetail from "./pages/student/IssueDetail.jsx";
import StudentAnnouncements from "./pages/student/Announcements.jsx";
import LostAndFound from "./pages/student/LostAndFound.jsx";
import ReportLost from "./pages/student/ReportLost.jsx";
import ReportFound from "./pages/student/ReportFound.jsx";
import IssuesFeed from "./pages/student/IssuesFeed.jsx";
import MyAccount from "./pages/student/MyAccount.jsx";

// Admin
import AdminDashboard from "./pages/admin/Dashboard.jsx";
import ManageIssues from "./pages/admin/ManageIssues.jsx";
import IssueDetailAdmin from "./pages/admin/IssueDetail.jsx";
import AdminAnnouncements from "./pages/admin/Announcements.jsx";
import Analytics from "./pages/admin/Analytics.jsx";
import LostAndFoundAdmin from "./pages/admin/LostAndFoundAdmin.jsx";
import AddAnnouncement from "./pages/admin/AddAnnouncement.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Landing />} />

      {/* Auth */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* ================= STUDENT ROUTES (MOCK, UNGUARDED) ================= */}
      <Route path="/student/dashboard" element={<StudentDashboard />} />
      <Route path="/student/report" element={<ReportIssue />} />
      <Route path="/student/issues" element={<MyIssues />} />
      <Route path="/student/issues/:id" element={<IssueDetail />} />
      <Route path="/student/issues/feed" element={<IssuesFeed />} />
      <Route
        path="/student/announcements"
        element={<StudentAnnouncements />}
      />
      <Route path="/student/lost-found" element={<LostAndFound />} />
      <Route
        path="/student/lost-found/report-lost"
        element={<ReportLost />}
      />
      <Route
        path="/student/lost-found/report-found"
        element={<ReportFound />}
      />
      <Route path="/student/account" element={<MyAccount />} />

      {/* ================= ADMIN ROUTES (MOCK, UNGUARDED) ================= */}
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/manage-issues" element={<ManageIssues />} />
      <Route
        path="/admin/manage-issues/:id"
        element={<IssueDetailAdmin />}
      />
      <Route
        path="/admin/announcements"
        element={<AdminAnnouncements />}
      />
      <Route
        path="/admin/announcements/add"
        element={<AddAnnouncement />}
      />
      <Route path="/admin/analytics" element={<Analytics />} />
      <Route path="/admin/lost-found" element={<LostAndFoundAdmin />} />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
