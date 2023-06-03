import React, { useState } from 'react';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Function to add a new task
  const addTask = () => {
    if (newTask.trim() !== '') {
      const updatedTasks = [...tasks, { description: newTask, completed: false }];
      setTasks(updatedTasks);
      setNewTask('');
    }
  };

  // Function to mark a task as completed
  const completeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  // Function to delete a task
  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>Total Tasks: {tasks.length}</h2>
      <h2>Completed Tasks: {tasks.filter(task => task.completed).length}</h2>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <TodoItem
            key={index}
            index={index}
            task={task}
            completeTask={completeTask}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
};

// TodoItem component
const TodoItem = ({ index, task, completeTask, deleteTask }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => completeTask(index)}
      />
      <span
        style={{
          textDecoration: task.completed ? 'line-through' : 'none',
        }}
      >
        {task.description}
      </span>
      <button onClick={() => deleteTask(index)}>Delete</button>
    </li>
  );
};

export default App;