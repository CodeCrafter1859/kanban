import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as DeleteIcon } from "../assets/delete.svg";
import { ReactComponent as EditIcon } from "../assets/edit.svg";
import "../styles/Card.css";

const Card = ({ id, title, desc, status, onUpdate, onDelete }) => {
  const [taskName, setTaskName] = useState(title || "title");
  const [description, setDescription] = useState(desc || "desc");
  const [taskStatus, setTaskStatus] = useState(status || "to-do");

  const [isEditing, setIsEditing] = useState(!title && !desc);

  const titleInputRef = useRef(null);

  useEffect(() => {
    setTaskName(title);
    setDescription(desc);
    setTaskStatus(status);
  }, [title, desc, status]);

  useEffect(() => {
    if (isEditing && titleInputRef.current) {
      titleInputRef.current.focus();
    }
  }, [isEditing]);

  const handleTaskNameChange = (e) => setTaskName(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleStatusChange = (e) => setTaskStatus(e.target.value);

  const handleSaveChanges = () => {
    onUpdate(id, taskName, description, taskStatus);
    setIsEditing(false);
  };

  const handleEditClick = () => setIsEditing(true);
  const handleDeleteClick = () => onDelete(id);

  return (
    <div className="card-container">
      <div className="task-container">
        <input
          ref={titleInputRef}
          type="text"
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
          value={description}
          onChange={handleDescriptionChange}
          disabled={!isEditing}
          required
        />
      </div>

      <select
        id="choices"
        value={taskStatus}
        onChange={handleStatusChange}
        disabled={!isEditing}
      >
        <option value="to-do">To Do</option>
        <option value="in-progress">In Progress</option>
        <option value="done">Done</option>
      </select>

      {isEditing && (
        <button type="submit" onClick={handleSaveChanges}>Save</button>
      )}
    </div>
  );
};

export default Card;
