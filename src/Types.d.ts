type AddTask = {
  type: 'ADD_TASK',
};

type DeleteTask = {
  type: 'DELETE_TASK',
  payload: number,
};

type ChangeTask = {
  type: 'CHANGE_TASK',
  payload: Task,
}

type LoadTasksSuccess = {
  type: 'LOAD_TASKS_SUCCESS',
  payload: Array<Task>,
}

type LoadTasksError = {
  type: 'LOAD_TASKS_ERROR',
}

type SaveTasksSuccess = {
  type: 'SAVE_TASKS_SUCCESS',
}

type SaveTasksError = {
  type: 'SAVE_TASKS_ERROR',
}

type ShowAlert = {
  type: 'SHOW_ALERT',
  payload: {
    type: AlertType,
    message: string,
  },
}

type HideAlert = {
  type: 'HIDE_ALERT',
  payload: number,
}

type LoadTasks = {
  type: 'LOAD_TASKS',
}

type SaveTasks = {
  type: 'SAVE_TASKS',
}

type Action =
  | AddTask
  | DeleteTask
  | ChangeTask
  | LoadTasksSuccess
  | LoadTasksError
  | SaveTasksSuccess
  | SaveTasksError
  | ShowAlert
  | HideAlert
  | LoadTasks
  | SaveTasks;

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