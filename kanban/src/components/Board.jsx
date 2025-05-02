
import React, { useState, useEffect } from "react";
import Column from "./Column";
import "../styles/Board.css";
import { DndContext } from "@dnd-kit/core";

const Board = ({ title, tasks, onUpdateTask, onDeleteTask, onAddTask }) => {
  const [taskList, setTaskList] = useState(tasks);

  useEffect(() => {
    setTaskList(tasks);
  }, [tasks]);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over || active.data.current.status === over.id) return;

    const updatedTask = {
      ...active.data.current,
      status: over.id,
    };

    onUpdateTask(updatedTask.id, updatedTask.title, updatedTask.description, over.id);
  };

  const statuses = ["to-do", "in-progress", "done"];

  return (
    <div className="board-container">
      <h3>{title}</h3>
      <DndContext onDragEnd={handleDragEnd}>
        <div className="board">
          {statuses.map((status) => (
            <Column
              key={status}
              status={status}
              tasks={taskList.filter((task) => task.status === status)}
              onUpdateTask={onUpdateTask}
              onDeleteTask={onDeleteTask}
              onAddTask={onAddTask}
            />
          ))}
        </div>
      </DndContext>
    </div>
  );
};

export default Board;
