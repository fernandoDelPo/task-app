import React from 'react';
import '../assets/stylesheets/Task.css'
import { AiOutlineCloseCircle } from 'react-icons/ai';

const Task = ({ id, text, completed, taskCompleted, deleteTask }) => {
  return (
    <div className={completed ? 'task-container completed' : 'task-container'}>
      <div
        className='text-task'
        onClick={() => taskCompleted(id)}>
        {text}
      </div>
      <div
        className='task-container-icons'
        onClick={() => deleteTask(id)}>
        <AiOutlineCloseCircle className='icon-task' />
      </div>
    </div>
  )
}

export default Task