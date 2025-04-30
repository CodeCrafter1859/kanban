const express = require("express");
const router = express.Router();

const {
  createTask,
  getAllTasks,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

router.post("/new_task", createTask);
router.get("/all_tasks", getAllTasks);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
