// @flow

const url = 'http://cfassignment.herokuapp.com/greg/tasks';

  type Task = {
    id: number,
    title: string,
  };

export const addTask = () => ({
  type: 'ADD_TASK',
  payload: null
});

export const deleteTask = (id: number) => ({
  type: 'DELETE_TASK',
  payload: id
});

export const changeTask = (id: number, title: string) => ({
  type: 'CHANGE_TASK',
  payload: { id: id, title: title }
});

export const showAlert = (type: string, message: string) => ({
  type: 'ALERT_SHOW',
  payload: { message: message, type: type }
});

export const hideAlert = (id: number) => ({
  type: 'ALERT_HIDE',
  payload: id
});

export const loadTasksSuccess = (tasks: Array<Task>) => ({
  type: 'LOAD_TASKS_SUCCESS',
  payload: tasks
});

export const loadTasksError = () => ({
  type: 'LOAD_TASKS_ERROR',
  payload: null
});

export const saveTasksSuccess = () => ({
  type: 'SAVE_TASKS_SUCCESS',
  payload: null
});

export const saveTasksError = () => ({
  type: 'SAVE_TASKS_ERROR',
  payload: null
});

export const loadTasks = () => {
  return (dispatch: any, getState: any) => {
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

export const saveTasks = (tasks: Array<Task>) => {
  return (dispatch: any, getState: any) => {
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
