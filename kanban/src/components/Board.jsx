import React, { useState } from "react";
import Column from "./Column";
import "../styles/Board.css";

const Board = ({
  title,
  tasks,
  onUpdateTask,
  onDeleteTask,
  onDragStart,
}) => {
  const [taskList, setTaskList] = useState(tasks);

  const handleDeleteTask = (id) => {
    const updatedTasks = taskList.filter((task) => task.id !== id);
    setTaskList(updatedTasks);
    if (onDeleteTask) onDeleteTask(id);
  };

  const handleUpdateTask = (id, taskName, description, status) => {
    const updatedTasks = taskList.map((task) =>
      task.id === id
        ? { ...task, title: taskName, description: description, status: status }
        : task
    );
    setTaskList(updatedTasks);
    if (onUpdateTask) onUpdateTask(id, taskName, description, status);
  };

  const handleAddTask = (newTask) => {
    setTaskList((prevTasks) => [...prevTasks, newTask]);
  };

  const statuses = ["to-do", "in-progress", "done"];

  return (
    <div className="board-container">
      <h3>{title}</h3>

      <div className="board">
        {statuses.map((status) => {
          const statusTasks = taskList.filter((task) => task.status === status);

          return (
            <Column
              key={status}
              status={status}
              tasks={statusTasks}
              onUpdateTask={handleUpdateTask}
              onDeleteTask={handleDeleteTask}
              onAddTask={handleAddTask} 
              onDragStart={onDragStart}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Board;
