const mongoose = require("mongoose");

const groupModel = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
});

const Group = mongoose.model("Group", groupModel);

module.exports = Group;
