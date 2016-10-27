import TaskConstants from '../constants/tasksConstants.js';

const baseState = {
  taskList: [
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
  ],
  newTask: ''
};

function removeTaskByIndex(state, index) {
  let taskList = state.taskList.slice(0);
  taskList.splice(index, 1);
  return Object.assign({}, state, {
    taskList: taskList
  });
}

function addTask(state) {
  var taskList = state.taskList.slice(0);
  taskList.push({
    name: state.newTask
  });
  return Object.assign({}, state, {
    taskList: taskList,
    newTask: ''
  });
}

function tasks(state = baseState, action) {
  switch (action.type) {
    case TaskConstants.TASK_REMOVE:
      return removeTaskByIndex(state, action.index);
    case TaskConstants.TASK_CHANGE_NEW:
      return Object.assign({}, state, {
        newTask: action.value
      });
    case TaskConstants.TASK_ADD:
      return addTask(state);
    default:
      return state;
  }
}

export default tasks;
