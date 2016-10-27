import { combineReducers } from 'redux';
import tasks from './tasksReducer';

const todoApp = combineReducers({
  tasks
});

export default todoApp;
