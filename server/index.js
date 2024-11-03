const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const taskRouter = require("./routes/taskRouter");
const errorHandler = require("./middleware/errorHandler");
const dbConnect = require("./config/dbConnection");
const userRouter = require("./routes/userRouter");

dbConnect();

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({ origin: ["https://todo-list-app-rust-nine.vercel.app", "http://localhost/3000"] }));
app.use("/api/tasks", taskRouter);
app.use("/api/users", userRouter);
app.get("/", (req, res) => {
  res.json({ message: "hello" });
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

module.exports = app;
