import React from "react";
import Card from "./Card";
import "../styles/Column.css";

const Column = ({ status, tasks, onUpdateTask, onDeleteTask }) => {
  let columnClass = "";
  if (status === "to-do") columnClass = "to-do";
  else if (status === "in-progress") columnClass = "in-progress";
  else if (status === "done") columnClass = "done";

  const columnTasks = tasks.filter((task) => task.status === status);

  return (
    <div className={`column ${columnClass}`}>
      <h4>{status.toUpperCase()}</h4>
      <div className="tasks">
        {columnTasks.map((task) => (
          <Card
            key={task.id}
            id={task.id}
            title={task.title}
            desc={task.description}
            status={task.status}
            onUpdate={onUpdateTask}
            onDelete={onDeleteTask}
          />
        ))}
      </div>
    </div>
  );
};

export default Column;
