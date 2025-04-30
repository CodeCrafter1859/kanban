import React, { useEffect, useState } from 'react';
import Board from './components/Board';
// import tasks from './data/data.json'
import axios from 'axios';

const Kanban = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log('Fetching all tasks...');
    axios.get('http://localhost:5000/api/all_tasks')
      .then(res => {
        console.log('Fetched tasks:', res.data);
        setTasks(res.data);
      })
      .catch(err => console.error('Failed to load tasks:', err));
  }, []);

  const handleAddTask = (newTask) => {
    console.log("Creating new task via API:", newTask);
    axios.post('http://localhost:5000/api/new_task', newTask)
      .then(res => {
        console.log('New task created:', res.data);
        setTasks(prevTasks => [...prevTasks, res.data]);
      })
      .catch(err => console.error('Failed to create task:', err));
  };

  const handleUpdateTask = (id, title, description, status) => {
    console.log(`Updating task ${id} with`, { title, description, status });
    axios.put(`http://localhost:5000/api/${id}`, {
      title,
      description,
      status
    })
    .then(res => {
      console.log(`Task ${id} updated:`, res.data);
      setTasks(prevTasks => prevTasks.map(task =>
        task.id === id ? res.data : task
      ));
    })
    .catch(err => console.error('Failed to update task:', err));
  };

  const handleDeleteTask = (id) => {
    console.log(`Deleting task ${id}...`);
    axios.delete(`http://localhost:5000/api/${id}`)
      .then(() => {
        console.log(`Task ${id} deleted.`);
        setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
      })
      .catch(err => console.error('Failed to delete task:', err));
  };

  console.log('Rendering Kanban component with tasks:', tasks);

  return (
    <div className="App">
      <Board
        title="Kanban Board"
        tasks={tasks}
        onAddTask={handleAddTask}
        onUpdateTask={handleUpdateTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
};

export default Kanban;
