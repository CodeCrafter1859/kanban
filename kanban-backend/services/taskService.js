const Task = require("../models/task");

exports.createTask = async (data) => {
  return await Task.create(data);
};

exports.getAllTasks = async () => {
  return await Task.findAll();
};

exports.updateTask = async (id, data) => {
  const task = await Task.findByPk(id);
  if (!task) {
    throw new Error("Task not found");
  }
  return await task.update(data);
};

exports.deleteTask = async (id) => {
  const task = await Task.findByPk(id);
  if (!task) {
    throw new Error("Task not found");
  }
  await task.destroy();
  return { message: "Task deleted successfully" };
};
