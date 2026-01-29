const Issue = require("../models/Issue");

exports.getAnalyticsOverview = async (req, res) => {
  try {
    // 1️⃣ Most frequent categories
    const categoryStats = await Issue.aggregate([
      { $group: { _id: "$category", count: { $sum: 1 } } },
      { $sort: { count: -1 } }
    ]);

    // 2️⃣ Campus-wise density
    const campusStats = await Issue.aggregate([
      { $group: { _id: "$location.campus", count: { $sum: 1 } } }
    ]);

    // 3️⃣ Block-wise density
    const blockStats = await Issue.aggregate([
      {
        $group: {
          _id: {
            campus: "$location.campus",
            block: "$location.block"
          },
          count: { $sum: 1 }
        }
      }
    ]);

    // 4️⃣ Pending vs Resolved
    const statusStats = await Issue.aggregate([
      {
        $group: {
          _id: {
            $cond: [
              { $in: ["$status", ["resolved", "closed"]] },
              "resolved",
              "pending"
            ]
          },
          count: { $sum: 1 }
        }
      }
    ]);

    // 5️⃣ Avg response time (reported → assigned)
    const responseTimes = await Issue.aggregate([
      { $unwind: "$statusHistory" },
      {
        $group: {
          _id: "$_id",
          reportedAt: {
            $min: {
              $cond: [
                { $eq: ["$statusHistory.status", "reported"] },
                "$statusHistory.timestamp",
                null
              ]
            }
          },
          assignedAt: {
            $min: {
              $cond: [
                { $eq: ["$statusHistory.status", "assigned"] },
                "$statusHistory.timestamp",
                null
              ]
            }
          }
        }
      },
      {
        $project: {
          responseTime: {
            $cond: [
              { $and: ["$reportedAt", "$assignedAt"] },
              {
                $divide: [
                  { $subtract: ["$assignedAt", "$reportedAt"] },
                  1000 * 60
                ]
              },
              null
            ]
          }
        }
      },
      { $match: { responseTime: { $ne: null } } },
      {
        $group: {
          _id: null,
          avgResponseTime: { $avg: "$responseTime" }
        }
      }
    ]);

    // 6️⃣ Avg resolution time (reported → resolved)
    const resolutionTimes = await Issue.aggregate([
      { $unwind: "$statusHistory" },
      {
        $group: {
          _id: "$_id",
          reportedAt: {
            $min: {
              $cond: [
                { $eq: ["$statusHistory.status", "reported"] },
                "$statusHistory.timestamp",
                null
              ]
            }
          },
          resolvedAt: {
            $min: {
              $cond: [
                { $eq: ["$statusHistory.status", "resolved"] },
                "$statusHistory.timestamp",
                null
              ]
            }
          }
        }
      },
      {
        $project: {
          resolutionTime: {
            $cond: [
              { $and: ["$reportedAt", "$resolvedAt"] },
              {
                $divide: [
                  { $subtract: ["$resolvedAt", "$reportedAt"] },
                  1000 * 60
                ]
              },
              null
            ]
          }
        }
      },
      { $match: { resolutionTime: { $ne: null } } },
      {
        $group: {
          _id: null,
          avgResolutionTime: { $avg: "$resolutionTime" }
        }
      }
    ]);

    // 7️⃣ Emergency issue trends
    const emergencyTrends = await Issue.aggregate([
      { $match: { priority: "emergency" } },
      {
        $group: {
          _id: {
            year: { $year: "$createdAt" },
            month: { $month: "$createdAt" }
          },
          count: { $sum: 1 }
        }
      },
      { $sort: { "_id.year": 1, "_id.month": 1 } }
    ]);

    res.json({
      categories: categoryStats,
      campusStats,
      blockStats,
      statusStats,
      avgResponseTime:
        responseTimes[0]?.avgResponseTime || 0,
      avgResolutionTime:
        resolutionTimes[0]?.avgResolutionTime || 0,
      emergencyTrends
    });
  } catch (err) {
    res.status(500).json({ message: "Analytics failed" });
  }
};
