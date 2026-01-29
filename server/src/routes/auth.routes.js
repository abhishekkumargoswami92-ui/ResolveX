const express = require("express");
const passport = require("passport");
const {
  register,
  login,
  googleLogin
} = require("../controllers/auth.controller");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

router.post(
  "/google",
  passport.authenticate("google-token", { session: false }),
  googleLogin
);

module.exports = router;
