const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
  isImportant: {
    type: Boolean,
    default: false,
  },
  dueDate: {
    type: Date,
  },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
