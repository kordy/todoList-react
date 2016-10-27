import { combineReducers } from 'redux';
import tasks from './tasksReducers.js';

const todoApp = combineReducers({
  tasks
});

export default todoApp;
