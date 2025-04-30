import React, { useState } from "react";
import Card from "./Card";
import "../styles/Column.css";
import { ReactComponent as PlusIcon } from "../assets/plusIcon.svg";

const Column = ({ status, tasks, onUpdateTask, onDeleteTask, onAddTask }) => {
  const [addingNew, setAddingNew] = useState(false);

  let columnClass = "";
  if (status === "to-do") columnClass = "to-do";
  else if (status === "in-progress") columnClass = "in-progress";
  else if (status === "done") columnClass = "done";

  const handleSaveNewTask = (title, description) => {
    if (!title.trim()) {
      setAddingNew(false);
      return;
    }

    const newTask = {
      title,
      description,
      status,
    };

    console.log("Sending new task to parent:", newTask);
    onAddTask(newTask);
    setAddingNew(false);
  };

  const handleCancelNewTask = () => {
    setAddingNew(false);
  };

  return (
    <div className={`column ${columnClass}`}>
      <h4>{status.toUpperCase()}</h4>
      <div className="tasks">
        {tasks.map((task) => (
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

        {addingNew && (
          <Card
            isNew
            title=""
            desc=""
            status={status}
            onSave={handleSaveNewTask}
            onCancel={handleCancelNewTask}
          />
        )}
      </div>

      <button onClick={() => setAddingNew(true)} className="btn-icon">
        <PlusIcon className="icon-plus" />
      </button>
    </div>
  );
};

export default Column;
