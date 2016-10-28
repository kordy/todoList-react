import React from 'react';
import TodoForm from '../todoForm/todoFormComponent';
import TodoListItem from './todoListItemComponent';
import TodoListAdd from './todoListAddComponent';
import { connect } from 'react-redux';
import TaskActions from '../../actions/taskActions';

class todoList extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  newTaskChange = (e) => {
    let { dispatch } = this.props;
    e.preventDefault();
    dispatch(TaskActions.newTaskChange(e.target.value));
  };

  addTask = (e) => {
    let { dispatch, tasks } = this.props;
    e.preventDefault();
    if (!tasks.newTask.trim()) return false;
    dispatch(TaskActions.taskAdd());
    return false;
  };

  removeTask = (index) => {
    let { dispatch } = this.props;
    dispatch(TaskActions.taskRemove(index));
  };

  render() {
    let {taskList, newTask} = this.props.tasks;

    return (
      <div className='todo-list'>
        <TodoForm />
        <TodoListAdd
          newTask={ newTask }
          newTaskChange={ this.newTaskChange }
          addTask={ this.addTask }
        />
        {
          taskList.map((item, index) => {
            return <TodoListItem
              key={ index }
              index={ index }
              removeTask={ this.removeTask }
              { ...item }/>
          })
        }
      </div>
    )
  }
}

function props(state) {
  return {
    tasks: state.tasks
  };
}

export default connect(props)(todoList);
