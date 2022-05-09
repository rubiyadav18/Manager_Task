const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  createTask,
  getTask,
  editTask,
  updateTask,
  deleteTask,
} = require("../controller/tasks");

router.route("/").get(getAllTasks).post(createTask);
router
  .route("/:id")
  .get(getTask)
  .patch(updateTask)
  .delete(deleteTask)
  .put(editTask);
//  res.send('all items')

module.exports = router;
