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

  onSubmit = (fields) => {
    let { dispatch, tasks } = this.props;
    let name = fields.name.value.trim();
    if (!name) return false;
    dispatch(TaskActions.taskAdd(name));
    return false;
  }

  onFieldChange(value, name, fields) {
    console.log('fieldChange');
    console.log(name, value);
    console.log(fields);
  }

  render() {
    let {taskList, newTask} = this.props.tasks;

    return (
      <div className='todo-list'>
        <TodoForm
          onSubmit={ this.onSubmit }
          onFieldChange={ this.onFieldChange }
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
