import { combineReducers } from 'redux';
import tasksReducer from './TasksReducer.ts';
import alertsReducer from './AlertsReducer.ts';

export default combineReducers({
  tasks: tasksReducer,
  alerts: alertsReducer,
});