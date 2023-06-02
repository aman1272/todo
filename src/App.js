import React, { useState } from 'react'

function App() {
  const [tasks, setTask] = useState([])
  const [newTask, setNewTask] = useState('')

  const addTask = (index) => {
    if (newTask.trim() !== "") {
      console.log("step")

      const updatedTasks = [...tasks, { description: newTask, completed: false }];
      updatedTasks.splice(index, 1)
      setTask(updatedTasks)
      setNewTask('')
    }
  }
  console.log("task",newTask)


  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1)
    setTask(updatedTasks)
  }

  const completeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed
    setTask(updatedTasks)
  }

  return (
    <div>
      <h1>Total Task</h1>
      <h1>Completed Task</h1>
      <input type='text' value={newTask} onChange={(e) => { setNewTask(e.target.value) }} />
      <button onClick={addTask}>Add Tasks</button>
      <ul>
        {tasks.map((task, index) => {
          <TodoItem
            key={index}
            index={index}
            task={task}
            completeTask={completeTask}
            deleteTask={deleteTask}
          />
        })}
      </ul>
    </div>
  );
}

const TodoItem = ({ index, task, completeTask, deleteTask }) => {
  return (
    <>
      <li>
        <input type="checkbox" checked={task.completed} onChange={completeTask(index)} />
        <span  >{task.description}</span>
        <button onClick={deleteTask(index)}>Delete Task</button>
      </li>

    </>
  )
}

export default App;
