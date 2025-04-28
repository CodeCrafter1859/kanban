import React from 'react'
import Column from './Column'
import '../styles/Board.css'
const Board = ({ board, columns, tasks, onUpdateTask, onDeleteTask, onDragStart }) => {
  const boardColumns = columns.filter(column => column.boardId === board.id)

  return (
    <div className="board-container">
      <h3>KanBan Board</h3>

      <div className="board">
        {boardColumns.map((column) => (
          <Column
            key={column.id}                
            column={column}                 
            tasks={tasks}                  
            onUpdateTask={onUpdateTask}     
            onDeleteTask={onDeleteTask}     
            onDragStart={onDragStart}       
          />
        ))}
      </div>
    </div>
  )
}

export default Board
