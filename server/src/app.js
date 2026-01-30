const express = require("express");

// Routes
const authRoutes = require("./routes/auth.routes");
const issueRoutes = require("./routes/issue.routes");
const adminRoutes = require("./routes/admin.routes");
const announcementRoutes = require("./routes/announcement.routes");
const lostFoundRoutes = require("./routes/lostFound.routes");
const analyticsRoutes = require("./routes/analytics.routes");

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

module.exports = app;
