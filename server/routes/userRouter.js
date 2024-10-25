const {
  currentUser,
  loginUser,
  registerUser,
} = require("../controllers/userController");

const express = require("express");
const validateTokenHandler = require("../middleware/validateTokenHandler");

//@desc GET User
//@route GET /api/users
//@access public
const userRouter = express.Router();

userRouter.route("/current").get(validateTokenHandler, currentUser);
userRouter.route("/login").post(loginUser);
userRouter.route("/register").post(registerUser);

module.exports = userRouter;
