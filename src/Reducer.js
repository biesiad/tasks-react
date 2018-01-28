const initialState = {
  tasks: [],
  savedTasks: [],
  isLoading: false,
  isSaving: false,
  alerts: [],
};

export default (state=initialState, { type, payload }) => {
  switch (type) {
    case 'ADD_TASK':
      return { ...state, tasks: [{ title: "", id: (new Date()).getTime() }, ...state.tasks] };
    case 'CHANGE_TASK':
      return { ...state, tasks: state.tasks.map((t) => t.id === payload.id ? payload : t) };
    case 'DELETE_TASK':
      return { ...state, tasks: state.tasks.filter((t) => t.id !== payload) };
    case 'LOAD_TASKS':
      return { ...state, isLoading: true };
    case 'LOAD_TASKS_SUCCESS':
      return { ...state, isLoading: false, tasks: payload, savedTasks: payload };
    case 'LOAD_TASKS_ERROR':
      return { ...state, isLoading: false };
    case 'SAVE_TASKS':
      return { ...state, isSaving: true };
    case 'SAVE_TASKS_SUCCESS':
      return { ...state, isSaving: false, savedTasks: state.tasks };
    case 'SAVE_TASKS_ERROR':
      return { ...state, isSaving: false };
    case 'ALERT_SHOW':
      return { ...state, alerts: [ ...state.alerts, { ...payload, id: (new Date ()).getTime() } ] };
    case 'ALERT_HIDE':
      return { ...state, alerts: state.alerts.filter((a) => a.id !== payload) }
    default:
      return state;
  }
};
