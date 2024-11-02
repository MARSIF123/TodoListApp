const asyncHandler = require("express-async-handler");
const Task = require("../Model/taskModel");

//@desc Get all tasks
//@route GET /api/tasks
//@access private
const getTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find({ userId: req.user.id });
  if (!tasks) {
    res
      .status(200)
      .json({ message: "No tasks to be found. Create a new one." });
  } else {
    res.send({ message: "Get All tasks", tasks });
  }
});

//@desc Get one task
//@route GET /api/tasks/:id
//@access private
const getTask = asyncHandler(async (req, res) => {
  const task = await Task.findOne({ _id: req.params.id, userId: req.user.id });
  if (!task) {
    res.status(404);
    throw new Error("Could not found one.");
  } else res.send({ message: "Get one task", task });
});

//@desc Add one task
//@route POST /api/tasks
//@access private
const addTask = asyncHandler(async (req, res) => {
  const { text, groupId, isCompleted, isImportant, dueDate } = req.body;
  if (!text) {
    console.log("All fields are mandetory!!");
    res.status(400);
    throw new Error("All fields are mandetory.");
  } else {
    try {
      const task = await Task.create({
        text,
        isCompleted,
        isImportant,
        dueDate,
        userId: req.user.id,
      });
      res.send({ message: "Task added ", task }).status(201);
    } catch (err) {
      console.log(err);
      console.log("WTF");
    }
  }
});

//@desc Update one tasks
//@route UPDATE /api/tasks/:id
//@access private
const updateTask = asyncHandler(async (req, res) => {
  if (Object.keys(req.body).length === 0) {
    console.log("Nothing to update");
    res.status(400);
    throw new Error("No data recieved. Nothing to update.");
  } else {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id },
      req.body,
      {
        new: true,
      }
    );
    res.send({ message: "Task Updated ", task });
  }
});

//@desc Delete one tasks
//@route Delete /api/tasks/:id
//@access private
const deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findOneAndDelete({
    _id: req.params.id,
    userId: req.user.id,
  });

  if (!task) {
    console.log("Could not delete one.");
    res.status(404);
    throw new Error("Could not delete one.");
  } else {
    res.send({ message: "Task deleted ", task }).status(200);
  }
});

module.exports = { getTasks, getTask, addTask, updateTask, deleteTask };
