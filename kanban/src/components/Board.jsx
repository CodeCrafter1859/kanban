import React from "react";
import Column from "./Column";
import tasksData from "../data/tasks";

const Board = () => {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {Object.keys(tasksData).map((columnTitle) => (
        <Column key={columnTitle} title={columnTitle} tasks={tasksData[columnTitle]} />
      ))}
    </div>
  );
};

export default Board;
