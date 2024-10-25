const express = require("express");
const taskRouter = express.Router();
const {
  getTasks,
  addTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");
const validateTokenHandler = require("../middleware/validateTokenHandler");

taskRouter.use(validateTokenHandler);

taskRouter.route("/").get(getTasks).post(addTask);
taskRouter.route("/:id").get(getTask).put(updateTask).delete(deleteTask);

module.exports = taskRouter;
