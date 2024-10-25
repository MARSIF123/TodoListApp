const express = require("express");
const {
  getGroups,
  getGroup,
  addGroup,
  updateGroup,
  deleteGroup,
} = require("../controllers/groupController");

const groupRouter = express.Router();

groupRouter.route("/").get(getGroups).post(addGroup);
groupRouter.route("/:id").get(getGroup).put(updateGroup).delete(deleteGroup);

module.exports = groupRouter;
