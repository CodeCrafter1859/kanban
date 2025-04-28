import React from "react";
import Card from "./Card";

const Column = ({ title, tasks }) => {
  return (
    <div>
      <h2>{title}</h2>
      {tasks.map((task) => (
        <Card key={task.id} task={task} />
      ))}
    </div>
  );
};

export default Column;
