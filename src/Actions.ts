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

export const loadTasksError = (): LoadTasksError => ({
  type: 'LOAD_TASKS_ERROR',
});

export const loadTasksSuccess = (tasks: Array<Task>): LoadTasksSuccess => ({
  type: 'LOAD_TASKS_SUCCESS',
  payload: tasks
});

export const saveTasksSuccess = (): SaveTasksSuccess => ({
  type: 'SAVE_TASKS_SUCCESS',
});

export const saveTasksError = (): SaveTasksError => ({
  type: 'SAVE_TASKS_ERROR',
});

export const showAlert = (type: AlertType, message: string): ShowAlert => ({
  type: 'SHOW_ALERT',
  payload: { type, message }
});

export const hideAlert = (id: number) => ({
  type: 'SHOW_HIDE',
  payload: id
});

type Dispatch = (action: Action) => void;
type GetState = () => State;
type ThunkAction = (dispatch: Dispatch, getState: any) => void;

export const loadTasks = (): ThunkAction => {
  return (dispatch, getState) => {
    dispatch({ type: 'LOAD_TASKS' });

    fetch(url, {
      headers: new Headers({ 'Content-Type': 'application/json' })
    })
      .then((request) => request.json())
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
    dispatch({ type: 'SAVE_TASKS' });

    fetch(url, {
      method: "POST",
      body: JSON.stringify({ tasks: tasks }),
      headers: new Headers({ 'Content-Type': 'application/json' })
    })
      .then((request) => request.json())
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
