import { Routes, Route } from "react-router-dom";

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


    </Routes>
  );
};

export default AppRoutes;
