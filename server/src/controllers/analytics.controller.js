const Issue = require("../models/Issue");

/**
 * GET /admin/analytics/overview
 */
exports.getOverview = async (req, res) => {
  try {
    const totalIssues = await Issue.countDocuments();

    const statusCounts = await Issue.aggregate([
      { $group: { _id: "$status", count: { $sum: 1 } } }
    ]);

    const categoryCounts = await Issue.aggregate([
      { $group: { _id: "$category", count: { $sum: 1 } } }
    ]);

    const priorityCounts = await Issue.aggregate([
      { $group: { _id: "$priority", count: { $sum: 1 } } }
    ]);

    const emergencyCount = await Issue.countDocuments({
      priority: "emergency"
    });

    // Avg resolution time (reported → resolved)
    const resolvedIssues = await Issue.find({
      status: { $in: ["resolved", "closed"] }
    });

    let totalResolutionTime = 0;
    let resolvedCount = 0;

    resolvedIssues.forEach((issue) => {
      const reported = issue.statusHistory.find(
        (s) => s.status === "reported"
      );
      const resolved = issue.statusHistory.find(
        (s) => s.status === "resolved"
      );

      if (reported && resolved) {
        totalResolutionTime +=
          new Date(resolved.timestamp) - new Date(reported.timestamp);
        resolvedCount++;
      }
    });

    const avgResolutionTime =
      resolvedCount === 0
        ? 0
        : Math.round(totalResolutionTime / resolvedCount / 1000 / 60); // minutes

    res.json({
      totalIssues,
      statusCounts,
      categoryCounts,
      priorityCounts,
      emergencyCount,
      avgResolutionTimeMinutes: avgResolutionTime
    });
  } catch (err) {
    res.status(500).json({ message: "Analytics failed" });
  }
};
