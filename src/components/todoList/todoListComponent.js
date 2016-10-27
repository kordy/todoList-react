import React from 'react';
import TodoListItem from './todoListItemComponent';
import TodoListAdd from './todoListAddComponent';
import { connect } from 'react-redux';
import TaskActions from './todoListAddComponent';

class todoList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      newTask: '',
      items: [
        {
          id: '1',
          name: 'Вспомнить Реакт'
        },
        {
          id: '2',
          name: 'Заплатить за ипотеку'
        },
        {
          id: '3',
          name: 'Забрать бумажки'
        }
      ]
    };
  }

  newTaskChange = (e) => {
    this.setState({
      newTask: e.target.value
    });
  };

  addTask = (e) => {
    e.preventDefault();

    var items = this.state.items.slice(0);
    items.push({
      name: this.state.newTask
    });
    this.setState({
      items: items,
      newTask: ''
    });
    return false;
  };

  removeTask = (index) => {
    var items = this.state.items.slice(0);
    items.splice(index, 1);
    this.setState({
      items: items
    });
  };

  render() {
    let {newTask, items} = this.state;
    return (
      <div className='todo-list'>
        <TodoListAdd
          newTask={ newTask }
          newTaskChange={ this.newTaskChange }
          addTask={ this.addTask }
        />
        {
          items.map((item, index) => {
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
