const asyncHandler = require("express-async-handler");
const User = require("../Model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//@desc Get a user
//@route GET /api/users/current
//@access private
const currentUser = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json({ message: "Current User", users, user: req.user });
});

//@desc Get a user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(401);
    throw new Error("All fields are required.");
  }
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign(
      {
        user: { id: user.id, username: user.username, email: user.email },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "10m" }
    );
    res.status(200).json({ message: "Successfully Login!!", token });
  } else {
    res.status(404);
    throw new Error("Invalid password or email");
  }
});

//@desc Get a user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if ((!username, !email, !password)) {
    res.status(400);
    throw new Error("All fields are required!!!");
  }
  const user = await User.findOne({ email });
  if (user) {
    res.status(400);
    throw new Error("Account already exists!!!");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    username,
    email,
    password: hashedPassword,
  });
  res.status(200).json({ message: "user registered", newUser });
});

module.exports = { currentUser, loginUser, registerUser };
