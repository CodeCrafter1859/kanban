import React, { useState, useEffect } from "react";
import Column from "./Column";
import "../styles/Board.css";

const Board = ({
  title,
  tasks,
  onUpdateTask,
  onDeleteTask,
  onAddTask
}) => {
  const [taskList, setTaskList] = useState(tasks);

  useEffect(() => {
    console.log("Board received tasks from parent:", tasks);
    setTaskList(tasks);
  }, [tasks]);

  const handleDeleteTask = (id) => {
    console.log(`Deleting task in Board: ${id}`);
    if (onDeleteTask) onDeleteTask(id);
  };

  const handleUpdateTask = (id, taskName, description, status) => {
    console.log(`Updating task in Board: ${id}`, {
      taskName,
      description,
      status
    });
    if (onUpdateTask) onUpdateTask(id, taskName, description, status);
  };

  const handleAddTask = (newTask) => {
    console.log("Sending task to onAddTask handler:", newTask);
    if (onAddTask) onAddTask(newTask);
  };

  const statuses = ["to-do", "in-progress", "done"];

  console.log("Rendering Board with taskList:", taskList);

  return (
    <div className="board-container">
      <h3>{title}</h3>

      <div className="board">
        {statuses.map((status) => {
          const statusTasks = taskList.filter((task) => task.status === status);
          console.log(`Rendering column '${status}' with tasks:`, statusTasks);

          return (
            <Column
              key={status}
              status={status}
              tasks={statusTasks}
              onUpdateTask={handleUpdateTask}
              onDeleteTask={handleDeleteTask}
              onAddTask={handleAddTask}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Board;
