import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as DeleteIcon } from "../assets/delete.svg";
import { ReactComponent as EditIcon } from "../assets/edit.svg";
import "../styles/Card.css";

const Card = ({
  id,
  title,
  desc,
  status,
  isNew = false,
  onUpdate,
  onDelete,
  onSave,
  onCancel
}) => {
  const [taskName, setTaskName] = useState(title || "");
  const [description, setDescription] = useState(desc || "");
  const [taskStatus, setTaskStatus] = useState(status || "to-do");
  const [isEditing, setIsEditing] = useState(isNew);

  const titleInputRef = useRef(null);

  useEffect(() => {
    setTaskName(title || "");
    setDescription(desc || "");
    setTaskStatus(status || "to-do");
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
    if (!taskName.trim()) return;

    if (isNew && onSave) {
      onSave(taskName.trim(), description.trim(), taskStatus);
    } else if (onUpdate) {
      onUpdate(id, taskName.trim(), description.trim(), taskStatus);
    }

    setIsEditing(false);
  };

  const handleEditClick = () => setIsEditing(true);
  const handleDeleteClick = () => onDelete(id);
  const handleCancelClick = () => {
    if (onCancel) onCancel();
    else setIsEditing(false);
  };

  return (
    <div className="card-container">
      <div className="task-container">
        <input
          ref={titleInputRef}
          type="text"
          value={taskName}
          onChange={handleTaskNameChange}
          disabled={!isEditing}
          placeholder="Task title"
        />
        {!isNew && (
          <div className="btn-container">
            <button onClick={handleDeleteClick}>
              <DeleteIcon className="delete-icon" />
            </button>
            <button onClick={handleEditClick}>
              <EditIcon className="edit-icon" />
            </button>
          </div>
        )}
      </div>

      <div className="description-container">
        <input
          type="text"
          value={description}
          onChange={handleDescriptionChange}
          disabled={!isEditing}
          placeholder="Description"
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
        <div className="btn-save-cancel">
          <button type="submit" onClick={handleSaveChanges}>Save</button>
          {isNew && <button type="submit" onClick={handleCancelClick}>Cancel</button>}
        </div>
      )}
    </div>
  );
};

export default Card;
