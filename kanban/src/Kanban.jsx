import React from 'react'
import Board from './components/Board'
import tasksData from './data/data.json'

const App = () => {
  const onUpdateTask = (taskId) => {
    console.log('Update task:', taskId)
  }

  const onDeleteTask = (taskId) => {
    console.log('Delete task:', taskId)
  }

  const onDragStart = (taskId) => {
    console.log('Drag start:', taskId)
  }

  return (
    <div>
      {tasksData.boards.map((board) => (
        <Board
          key={board.id}
          board={board}
          columns={tasksData.columns}
          tasks={tasksData.tasks}
          onUpdateTask={onUpdateTask}
          onDeleteTask={onDeleteTask}
          onDragStart={onDragStart}
        />
      ))}
    </div>
  )
}

export default App
