import { combineReducers } from 'redux';
import tasksReducer from './TasksReducer';
import alertsReducer from './AlertsReducer';

export default combineReducers({
  tasks: tasksReducer,
  alerts: alertsReducer,
});