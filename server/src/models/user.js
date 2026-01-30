import mongoose from "mongoose";

const locationSchema = new mongoose.Schema({
  campus: {
    type: String,
    required: true,
  },
  block: {
    type: String,
    required: true,
  },
  room: {
    type: String,
    required: true,
  },
});

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      select: false, // important for security
    },

    role: {
      type: String,
      enum: ["student", "admin"],
      default: "student",
    },

    collegeName: {
      type: String,
      required: true,
    },

    location: {
      type: locationSchema,
      required: true,
    },

    /* 🔽 PROFILE EXTENSIONS (for MyAccount) */

    phone: {
      type: String,
      default: null,
    },

    emergencyContact: {
      type: String,
      default: null,
    },

    bloodGroup: {
      type: String,
      enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
      default: null,
    },
  },
  {
    timestamps: true, // adds createdAt & updatedAt
  }
);

const User = mongoose.model("User", userSchema);

export default User;
