import { combineReducers } from 'redux';
import alertsReducer from './AlertsReducer.ts';

const initialState: State = {
  tasks: [],
  savedTasks: [],
  isLoading: false,
  isSaving: false,
};

 const tasksReducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case 'ADD_TASK':
      return { ...state, tasks: [{ title: "", id: (new Date()).getTime() }, ...state.tasks] };
    case 'DELETE_TASK':
      return { ...state, tasks: state.tasks.filter((t) => t.id !== action.payload) };
    case 'CHANGE_TASK':
      return { ...state, tasks: state.tasks.map((t) => t.id === action.payload.id ? action.payload : t) };
    case 'LOAD_TASKS_REQUEST':
      return { ...state, isLoading: true };
    case 'LOAD_TASKS_SUCCESS':
      return { ...state, isLoading: false, tasks: action.payload, savedTasks: action.payload };
    case 'LOAD_TASKS_ERROR':
      return { ...state, isLoading: false };
    case 'SAVE_TASKS_REQUEST':
      return { ...state, isSaving: true };
    case 'SAVE_TASKS_SUCCESS':
      return { ...state, isSaving: false, savedTasks: state.tasks };
    case 'SAVE_TASKS_ERROR':
      return { ...state, isSaving: false };
    default:
      // NOTE: we need to ignore all actions that we don't care about in this reducer
      // so we can't use exhaustiveness check with:
      // return assertNever(action);  
      return state;
  }
}

// function assertNever(x: never): never {
//   throw new Error("Unexpected object: " + x);
// }
export default combineReducers({
  tasks: tasksReducer,
  alerts: alertsReducer,
});