import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../assets/stylesheets/TaskForm.css'

const TaskForm = (props) => {

  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleOrder = e => {
    e.preventDefault();

    const newTask = {
      id: uuidv4(),
      text: input,
      completed: false
    };

    props.onSubmit(newTask);
    setInput('');
  };


  return (
    <form
      className='task-form'
      onSubmit={handleOrder}>
      <input
        className='task-input'
        type='text'
        placeholder='Enter a task'
        name='text'
        onChange={handleChange}
      />
      <button className='task-button'>
        add task
      </button>
    </form>
  )
}

export default TaskForm