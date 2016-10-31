import TaskConstants from '../constants/tasksConstants.js';

function taskAdd(value) {
  return {
    type: TaskConstants.TASK_ADD,
    value: value
  };
}

function taskRemove(index) {
  return {
    type: TaskConstants.TASK_REMOVE,
    index: index
  };
}

function newTaskChange(value) {
  return {
    type: TaskConstants.TASK_CHANGE_NEW,
    value: value
  };
}

export default {
  taskAdd,
  taskRemove,
  newTaskChange
}
