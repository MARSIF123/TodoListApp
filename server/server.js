const express = require("express");
const dotenv = require("dotenv").config();
const taskRouter = require("./routes/taskRouter");
const groupRouter = require("./routes/groupRouter");
const errorHandler = require("./middleware/errorHandler");
const dbConnect = require("./config/dbConnection");
const userRouter = require("./routes/userRouter");

dbConnect();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/tasks", taskRouter);
app.use("/api/groups", groupRouter);
app.use("/api/users", userRouter);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
