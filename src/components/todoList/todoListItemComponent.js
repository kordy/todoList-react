import React from 'react';

export default (props) => {
  return (
    <div className='todo-list__item' >
      { props.name }
      &nbsp;<span onClick={ () => props.removeTask(props.index) }>X</span>
    </div>
  )
};
