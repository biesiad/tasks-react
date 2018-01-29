// @flow

const initialState: State = {
  tasks: [],
  savedTasks: [],
  isLoading: false,
  isSaving: false,
  alerts: [],
};

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'ADD_TASK':
      return { ...state, tasks: [{ title: "", id: (new Date()).getTime() }, ...state.tasks] };
    case 'CHANGE_TASK':
      // FLOW:2 doesn't know payload can't be null in here
      const task = action.payload;
      return { ...state, tasks: state.tasks.map((t) => t.id === task.id ? task : t) };
    case 'DELETE_TASK':
      return { ...state, tasks: state.tasks.filter((t) => t.id !== action.payload) };
    case 'LOAD_TASKS_SUCCESS':
      return { ...state, isLoading: false, tasks: action.payload, savedTasks: action.payload };
    case 'LOAD_TASKS_ERROR':
      return { ...state, isLoading: false };
    case 'SAVE_TASKS_SUCCESS':
      return { ...state, isSaving: false, savedTasks: state.tasks };
    case 'SAVE_TASKS_ERROR':
      return { ...state, isSaving: false };
    case 'LOAD_TASKS':
      return { ...state, isLoading: true };
    case 'SAVE_TASKS':
      return { ...state, isSaving: true };
    case 'SHOW_ALERT':
      return { ...state, alerts: [ ...state.alerts, { ...action.payload, id: (new Date ()).getTime() } ] };
    case 'HIDE_ALERT':
      return { ...state, alerts: state.alerts.filter((a) => a.id !== action.payload) }
    default:
      (action: empty);
      return state;
  };
};
