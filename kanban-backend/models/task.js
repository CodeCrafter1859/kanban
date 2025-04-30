// models/task.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Task = sequelize.define(
  "Task",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM("to-do", "in-progress", "done"),
      allowNull: false,
      defaultValue: "to-do",
    },
  },
  {
    tableName: "tasks",
    timestamps: false,
  }
);

module.exports = Task;
