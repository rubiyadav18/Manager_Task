const { param } = require("../routes/tasks");

const getAllTasks = (req, res) => {
  res.send("all items task");
};

const createTask = (req, res) => {
  // res.json(req.body)
};
const getTask = (req, res) => {
  res.json({id:req.params.id});
};

const updateTask = (req, res) => {
  res.send("updateing task");
};

const deleteTask = (req, res) => {
  res.send("deleteing  task");
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
