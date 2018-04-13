type Dispatch = (action: Action) => void;
type GetState = () => State;
type ThunkAction = (dispatch: Dispatch, getState: any) => void;

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

type LoadTasks = {
  type: 'LOAD_TASKS'
}

type LoadTasksRequest = {
  type: 'LOAD_TASKS_REQUEST'
}

type LoadTasksSuccess = {
  type: 'LOAD_TASKS_SUCCESS',
  payload: Array<Task>,
}

type LoadTasksError = {
  type: 'LOAD_TASKS_ERROR',
}

type SaveTasks = {
  type: 'SAVE_TASKS',
}

type SaveTasksRequest = {
  type: 'SAVE_TASKS_REQUEST',
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


type AlertAction =
  | ShowAlert
  | HideAlert;

type Action =
  | AlertAction
  | AddTask
  | DeleteTask
  | ChangeTask
  | LoadTasks
  | LoadTasksRequest
  | LoadTasksSuccess
  | LoadTasksError
  | SaveTasks
  | SaveTasksRequest
  | SaveTasksSuccess
  | SaveTasksError;


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
};

type AlertsState = {
  alerts: Array<Alert>,
};