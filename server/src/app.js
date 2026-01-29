const express = require("express");
const authRoutes = require("./routes/auth.routes");

const app = express();

app.use(express.json());

// AUTH ROUTES
app.use("/auth", authRoutes);

module.exports = app;

//ISSUE ROUTES
const issueRoutes = require("./routes/issue.routes");

app.use("/issues", issueRoutes);

// ADMIN ROUTES
const adminRoutes = require("./routes/admin.routes");

app.use("/admin", adminRoutes);

// ANNOUNCEMENT ROUTES
const announcementRoutes = require("./routes/announcement.routes");

app.use("/announcements", announcementRoutes);

//LOST AND FOUND ROUTES
const lostFoundRoutes = require("./routes/lostFound.routes");

app.use("/lost-found", lostFoundRoutes);



