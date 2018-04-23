import { ThunkAction } from './Types.d';
import { showAlert, hideAlert } from './AlertsReducer';
import { Task, TasksState, TasksAction, AddTask, DeleteTask, ChangeTask, LoadTasksRequest, LoadTasksError, LoadTasksSuccess, SaveTasksRequest, SaveTasksSuccess, SaveTasksError } from './TasksReducer.d';

const initialState: TasksState = {
  tasks: [],
  savedTasks: [],
  isLoading: false,
  isSaving: false,
};

export default (state = initialState, action: TasksAction): TasksState => {
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
      return state;
  }
}

const url = 'http://cfassignment.herokuapp.com/greg/tasks';

export const addTask = (): AddTask => ({
  type: 'ADD_TASK',
});

export const deleteTask = (id: number): DeleteTask => ({
  type: 'DELETE_TASK',
  payload: id,
});

export const changeTask = (id: number, title: string): ChangeTask => ({
  type: 'CHANGE_TASK',
  payload: { id: id, title: title },
});

export const loadTasksRequest = (): LoadTasksRequest => ({
  type: 'LOAD_TASKS_REQUEST',
});

export const loadTasksError = (): LoadTasksError => ({
  type: 'LOAD_TASKS_ERROR',
});

export const loadTasksSuccess = (tasks: Array<Task>): LoadTasksSuccess => ({
  type: 'LOAD_TASKS_SUCCESS',
  payload: tasks
});

export const saveTasksRequest = (): SaveTasksRequest => ({
  type: 'SAVE_TASKS_REQUEST',
});

export const saveTasksSuccess = (): SaveTasksSuccess => ({
  type: 'SAVE_TASKS_SUCCESS',
});

export const saveTasksError = (): SaveTasksError => ({
  type: 'SAVE_TASKS_ERROR',
});

export const loadTasks = (): ThunkAction => {
  return (dispatch, getState) => {
    dispatch(loadTasksRequest());

    fetch(url, {
      headers: new Headers({ 'Content-Type': 'application/json' })
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.tasks) {
          dispatch(loadTasksSuccess(json.tasks));
        } else {
          dispatch(loadTasksError());
          dispatch(showAlert("error", "Can't load tasks."))
        }
      }).catch(() => {
        dispatch(loadTasksError());
        dispatch(showAlert("error", "Can't load tasks."))
      });
  }
};

export const saveTasks = (tasks: Array<Task>): ThunkAction => {
  return (dispatch, getState) => {
    dispatch(saveTasksRequest());

    fetch(url, {
      method: "POST",
      body: JSON.stringify({ tasks: tasks }),
      headers: new Headers({ 'Content-Type': 'application/json' })
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.tasks) {
          dispatch(saveTasksSuccess());
          dispatch(showAlert("success", "Tasks saved."))
        } else {
          dispatch(saveTasksError());
          dispatch(showAlert("error", "Can't save tasks."))
        }
      }).catch(() => {
        dispatch(saveTasksError());
        dispatch(showAlert("error", "Can't save tasks."))
      });
  }
};
