import React, { useState, useEffect } from "react";
import "../styles/Card.css";
import { ReactComponent as DeleteIcon } from "../assets/delete.svg";
import { ReactComponent as EditIcon } from "../assets/edit.svg";

const Card = ({ task, onUpdate, onDelete }) => {
  const [taskName, setTaskName] = useState(task.title || "");
  const [description, setDescription] = useState(task.description || "");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setTaskName(task.title);
    setDescription(task.description);
  }, [task]);

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSaveChanges = () => {
    onUpdate(task.id, taskName, description);
    setIsEditing(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleDeleteClick = () => {
    onDelete(task.id);
  };

  const handleDragStart = (e) => {
    e.dataTransfer.setData("taskId", task.id);
  };

  return (
    <div className="card-container" draggable onDragStart={handleDragStart}>
      <div className="task-container">
        <input
          type="text"
          placeholder="Enter task name"
          value={taskName}
          onChange={handleTaskNameChange}
          disabled={!isEditing}
          required
        />
        <div className="btn-container">
          <button onClick={handleDeleteClick}>
            <DeleteIcon className="delete-icon" />
          </button>
          <button onClick={handleEditClick}>
            <EditIcon className="edit-icon" />
          </button>
        </div>
      </div>
      <div className="description-container">
        <input
          type="text"
          placeholder="Enter task description"
          value={description}
          onChange={handleDescriptionChange}
          disabled={!isEditing} required
        />
      </div>
      {isEditing && (
        <button onClick={handleSaveChanges} type="submit">
          Save
        </button>
      )}
    </div>
  );
};

export default Card;
