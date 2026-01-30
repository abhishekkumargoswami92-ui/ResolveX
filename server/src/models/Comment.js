import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    issue: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Issue",
      required: true,
      index: true,
    },

    text: {
      type: String,
      required: true,
      trim: true,
    },

    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    visibility: {
      type: String,
      enum: ["public"],
      default: "public", // future-proofing, but only public for now
    },
  },
  {
    timestamps: true, // createdAt, updatedAt
  }
);

/* Index for fast issue-wise lookup */
commentSchema.index({ issue: 1, createdAt: 1 });

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
