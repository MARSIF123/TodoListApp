const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateTokenHandler = (req, res, next) => {
  let token;
  token = req.headers.Authorization || req.headers.authorization;
  if (!token) {
    res.status(401);
    throw new Error("Token is missing");
  }
  if (token && token.startsWith("Bearer")) {
    token = token.split(" ")[1];
    console.log(token);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        res.status(401);
        throw new Error("Token is invalid.");
      }
      req.user = decoded.user;
      next();
    });
  } else {
    res.status(401);
    throw new Error("Token is invalid");
  }
};

module.exports = validateTokenHandler;
