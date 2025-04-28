import React from "react";
import Card from "./Card";
import "../data/data.json";
import '../styles/Column.css'

const Column = ({ column, tasks, onUpdateTask, onDeleteTask, onDragStart }) => {
  const columnTasks = tasks.filter((task) => task.columnId === column.id);

  let columnClass = "";
  if (column.name === "To Do") columnClass = "to-do";
  if (column.name === "In Progress") columnClass = "in-progress";
  if (column.name === "Done") columnClass = "done";

  return (
    <div className={`column ${columnClass}`}>
      <h4>{column.name}</h4>
      <div className="tasks">
        {columnTasks.map((task) => (
          <Card
            key={task.id}
            task={task}
            onUpdate={onUpdateTask}
            onDelete={onDeleteTask}
            onDragStart={onDragStart}
          />
        ))}
      </div>
    </div>
  );
};

export default Column;
