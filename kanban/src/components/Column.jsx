// Column.jsx
import React, { useState } from "react";
import Card from "./Card";
import "../styles/Column.css";
import { useDroppable } from "@dnd-kit/core";
import { ReactComponent as PlusIcon } from "../assets/plusIcon.svg";

const Column = ({ status, tasks, onUpdateTask, onDeleteTask, onAddTask }) => {
  const [addingNew, setAddingNew] = useState(false);
  const { setNodeRef, isOver } = useDroppable({ id: status });

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

    onAddTask(newTask);
    setAddingNew(false);
  };

  const columnStyle = isOver ? { background: "#e0ffe0" } : {};

  return (
    <div className={`column ${status}`} ref={setNodeRef} style={columnStyle}>
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
            onCancel={() => setAddingNew(false)}
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
