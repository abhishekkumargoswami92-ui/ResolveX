import mongoose from "mongoose";

/* ---------------- STATUS HISTORY ---------------- */

const statusHistorySchema = new mongoose.Schema(
  {
    status: {
      type: String,
      enum: [
        "reported",
        "assigned",
        "in-progress",
        "resolved",
        "closed",
      ],
      required: true,
    },

    remark: {
      type: String,
      default: null,
    },

    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    timestamp: {
      type: Date,
      default: Date.now,
    },
  },
  { _id: false }
);

/* ---------------- ISSUE ---------------- */

const issueSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      default: null, // optional (you mostly use description)
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      enum: [
        "Plumbing",
        "Electrical",
        "Internet",
        "Furniture",
        "Maintenance",
        "Other",
      ],
      required: true,
    },

    priority: {
      type: String,
      enum: ["low", "medium", "high", "emergency"],
      default: "medium",
    },

    visibility: {
      type: String,
      enum: ["public", "private"],
      default: "public",
    },

    status: {
      type: String,
      enum: [
        "reported",
        "assigned",
        "in-progress",
        "resolved",
        "closed",
      ],
      default: "reported",
    },

    location: {
      campus: String,
      block: String,
      room: String,
    },

    images: [
      {
        type: String, // multer / cloud URL later
      },
    ],

    reportedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },

    /* -------- DUPLICATE MERGING -------- */

    isMerged: {
      type: Boolean,
      default: false,
    },

    parentIssue: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Issue",
      default: null,
    },

    reporters: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    /* -------- TIMELINE -------- */

    statusHistory: [statusHistorySchema],
  },
  {
    timestamps: true, // createdAt, updatedAt
  }
);

/* ---------------- INDEXES (FOR ANALYTICS) ---------------- */

issueSchema.index({ category: 1 });
issueSchema.index({ priority: 1 });
issueSchema.index({ status: 1 });
issueSchema.index({ "location.block": 1 });
issueSchema.index({ createdAt: 1 });

const Issue = mongoose.model("Issue", issueSchema);

export default Issue;
