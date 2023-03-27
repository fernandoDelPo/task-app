import React, { Fragment, useState } from 'react';
import TaskForm from './TaskForm';
import '../assets/stylesheets/TaskList.css'
import Task from './Task';

const ThingsToDo = () => {

  const [tasks, setTasks] = useState([]);

  const addTask = task =>{
    if (task.text.trim()) {
      task.text = task.text.trim();
      const updatedTasks = [task, ...tasks];
      setTasks(updatedTasks); 
    } 
  };

  const deleteTask = id => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  const taskCompleted = id => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(updatedTasks)
  };

  return (
    <>
    <TaskForm onSubmit={addTask} />
    <div className='task-list-container'>
      {
        tasks.map((task) => 
          <Task
            key={task.id}
            id={task.id}
            text={task.text}
            completed={task.completed}
            taskCompleted={taskCompleted}
            deleteTask={deleteTask}
          />
        )
      }
    </div>
    </>
  )
}

export default ThingsToDo