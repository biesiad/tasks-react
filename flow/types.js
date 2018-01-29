// @flow

type Dispatch = (action: Action | ThunkAction) => any;
type GetState = () => State;
type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;

type Task = {
  id: number,
  title: string,
};

type AlertType = 'success' | 'error';

type Alert = {
  id: number,
  type: AlertType,
  message: string,
};

type State = {
  tasks: Array<Task>,
  savedTasks: Array<Task>,
  isLoading: boolean,
  isSaving: boolean,
  alerts: Array<Alert>,
};

type AddTask = {
  type: 'ADD_TASK',
  payload: null,
};
type ChangeTask = {
  type: 'CHANGE_TASK',
  payload: Task
};
type DeleteTask = {
  type: 'DELETE_TASK',
  payload: number,
};
type LoadTasksSuccess = {
  type: 'LOAD_TASKS_SUCCESS',
  payload: Array<Task>,
};
type LoadTasksError = {
  type: 'LOAD_TASKS_ERROR',
  payload: null,
};
type SaveTasksSuccess = {
  type: 'SAVE_TASKS_SUCCESS',
  payload: null,
};
type SaveTasksError = {
  type: 'SAVE_TASKS_ERROR',
  payload: null,
};
type LoadTasks = {
  type: 'LOAD_TASKS',
  payload: any,
};
type SaveTasks = {
  type: 'SAVE_TASKS',
  payload: null,
};
type ShowAlert = {
  type: 'SHOW_ALERT',
  payload: {
    type: AlertType,
    message: string,
  },
};
type HideAlert = {
  type: 'HIDE_ALERT',
  payload: number,
};

type Action =
  | AddTask
  | DeleteTask
  | ChangeTask
  | LoadTasksSuccess
  | LoadTasksError
  | SaveTasksSuccess
  | SaveTasksError
  | LoadTasks
  | SaveTasks
  | ShowAlert
  | HideAlert
