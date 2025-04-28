import React, { useState } from "react";
import "../styles/Card.css";
import { ReactComponent as DeleteIcon } from "../assets/delete.svg";
import { ReactComponent as EditIcon } from "../assets/edit.svg";

const Card = () => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSaveChanges = () => {
    console.log("Updated Task Name:", taskName);
    console.log("Updated Description:", description);
    setIsEditing(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <div className="card-container">
      <div className="task-container">
        <input
          type="text"
          placeholder="Enter task name"
          value={taskName}
          onChange={handleTaskNameChange}
          disabled={taskName === "" && !isEditing} // Disable input if empty and not editing
        />
        <div className="btn-container">
          <button>
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
          disabled={taskName === "" && !isEditing} 
        />
      </div>
      {isEditing && (
        <button onClick={handleSaveChanges} type="submit">save</button> 
      )}
    </div>
  );
};

export default Card;
