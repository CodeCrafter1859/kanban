import React from 'react'
import Board from './components/Board'
import tasks from './data/data.json'

const Kanban = () => {
  const handleUpdateTask = (id, title, description, status) => {
    console.log(`Updated task: ${id}, ${title}, ${description}, ${status}`);
  };

  const handleDeleteTask = (id) => {
    console.log(`Deleted task with id: ${id}`);
  };

  const handleDragStart = (e) => {
    console.log("Drag started for task:", e);
  };

  return (
    <div className="App">
      <Board
        title="Kanban Board"
        tasks={tasks}
        onUpdateTask={handleUpdateTask}
        onDeleteTask={handleDeleteTask}
        onDragStart={handleDragStart}
      />
    </div>
  );
};

export default Kanban
