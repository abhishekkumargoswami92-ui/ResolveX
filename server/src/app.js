const express = require("express");

// Routes
const authRoutes = require("./routes/auth.routes.js");
const issueRoutes = require("./routes/issue.routes.js");
const adminRoutes = require("./routes/admin.routes.js");
const announcementRoutes = require("./routes/announcement.routes.js");
const lostFoundRoutes = require("./routes/lostFound.routes.js");
const analyticsRoutes = require("./routes/analytics.routes.js");

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
