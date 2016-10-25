import React from 'react';

export default (props) => {
  return (
    <div className='todo-list-add'>
      <form onSubmit={ props.addTask }>
        <input className='todo-list-add__input' onChange={ props.newTaskChange } type='text' value={ props.newTask } />
        <button className='todo-list-add__button'>add</button>
      </form>
    </div>
  )
};
