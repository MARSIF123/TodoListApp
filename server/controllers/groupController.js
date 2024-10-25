const asyncHandler = require("express-async-handler");
const Group = require("../Model/groupModel");

//@desc Get all groups
//@route GET /api/groups
//@access public
const getGroups = asyncHandler(async (req, res) => {
  const groups = await Group.find();
  console.log(groups);
  if (!groups) {
    console.log("No Groups found.");
    res.status(404);
    throw new Error("No Groups be found");
  } else {
    res.status(200).json({ groups });
  }
});

//@desc Get one groups
//@route GET /api/groups/:id
//@access public
const getGroup = asyncHandler(async (req, res) => {
  const group = await Group.findById(req.params.id);
  if (!group) {
    console.log("No Groups found.");
    res.status(404);
    throw new Error("No Groups be found");
  } else {
    res.status(200).json({ group });
  }
});

//@desc Add one group
//@route POST /api/groups
//@access public
const addGroup = asyncHandler(async (req, res) => {
  const { title } = req.body;
  if (!title) {
    console.log("Title is empty.");
    res.status(404);
    throw new Error("Null value for title.");
  } else {
    const group = await Group.create({ title });
    res.status(200).json({ group });
  }
});

//@desc Update one group
//@route UPDATE /api/groups
//@access public
const updateGroup = asyncHandler(async (req, res) => {
  const { title } = req.body;
  if (!title) {
    console.log("Title is empty.");
    res.status(404);
    throw new Error("Null value for title.");
  } else {
    const group = await Group.findByIdAndUpdate(
      req.params.id,
      { title },
      { new: true }
    );
    res.status(200).json({ group });
  }
});

//@desc Delet one group
//@route DELETE /api/groups
//@access public
const deleteGroup = asyncHandler(async (req, res) => {
  const group = await Group.findByIdAndDelete(req.params.id);

  if (!group) {
    console.log("Could not delete.");
    res.status(404);
    throw new Error("Could not delete.");
  } else {
    res.status(200).json({ group });
  }
});

module.exports = { getGroups, getGroup, addGroup, updateGroup, deleteGroup };
