import express from "express";

// Routes
import authRoutes from "./routes/auth.routes.js";
import issueRoutes from "./routes/issue.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import announcementRoutes from "./routes/announcement.routes.js";
import lostFoundRoutes from "./routes/lostFound.routes.js";
import analyticsRoutes from "./routes/analytics.routes.js";

const app = express();

/* ---------------- MIDDLEWARE ---------------- */
app.use(express.json());

/* ---------------- ROUTES ---------------- */

// Auth
app.use("/auth", authRoutes);

// Student issues
app.use("/issues", issueRoutes);

// Announcements
app.use("/announcements", announcementRoutes);

// Lost & Found
app.use("/lost-found", lostFoundRoutes);

// Admin
app.use("/admin", adminRoutes);
app.use("/admin/analytics", analyticsRoutes);

export default app;
