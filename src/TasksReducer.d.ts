
export interface Task {
  id: number,
  title: string,
}

export interface TasksState {
  tasks: Array<Task>,
  savedTasks: Array<Task>,
  isLoading: boolean,
  isSaving: boolean,
}


export type TasksAction =
  | AddTask
  | DeleteTask
  | ChangeTask
  | LoadTasksRequest
  | LoadTasksSuccess
  | LoadTasksError
  | SaveTasksRequest
  | SaveTasksSuccess
  | SaveTasksError;

export interface AddTask {
  type: 'ADD_TASK',
}

export interface DeleteTask {
  type: 'DELETE_TASK',
  payload: number,
}

export interface ChangeTask {
  type: 'CHANGE_TASK',
  payload: Task,
}

export interface LoadTasksRequest {
  type: 'LOAD_TASKS_REQUEST'
}

export interface LoadTasksSuccess {
  type: 'LOAD_TASKS_SUCCESS',
  payload: Array<Task>,
}

export interface LoadTasksError {
  type: 'LOAD_TASKS_ERROR',
}

export interface SaveTasksRequest {
  type: 'SAVE_TASKS_REQUEST',
}

export interface SaveTasksSuccess {
  type: 'SAVE_TASKS_SUCCESS',
}

export interface SaveTasksError {
  type: 'SAVE_TASKS_ERROR',
}
