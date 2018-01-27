import { fromJS, Record, List, Map } from 'immutable';

const InitialState = Record({
  tasks: new List(),
  savedTasks: new List(),
  isLoading: false,
  isSaving: false,
  alerts: new List(),
});

export default (state = new InitialzState({}), { type, payload }) => {
  switch (type) {
    case 'ADD_TASK':
      return state.set('tasks', state.get('tasks').unshift(fromJS({ title: "", id: (new Date()).getTime() })));
    case 'CHANGE_TASK':
      return state
        .set('tasks', state.get('tasks').map((t) => t.get('id') === payload.id ? fromJS(payload) : t));
    case 'DELETE_TASK':
      return state
        .set('tasks', state.get('tasks').filter((t) => t.get('id') !== payload));
    case 'LOAD_TASKS':
      return state.set('isLoading', true);
    case 'LOAD_TASKS_SUCCESS':
      return state
        .set('isLoading', false)
        .set('tasks', fromJS(payload))
        .set('savedTasks', fromJS(payload));
    case 'LOAD_TASKS_ERROR':
      return state.set('isLoading', false);
    case 'SAVE_TASKS':
      return state.set('isSaving', true);
    case 'SAVE_TASKS_SUCCESS':
      return state
        .set('isSaving', false)
        .set('savedTasks', state.get('tasks'));
    case 'SAVE_TASKS_ERROR':
      return state.set('isSaving', false);
    case 'ALERT_SHOW':
      return state
        .set('alerts', state.get('alerts').push(fromJS({ ...payload, id: (new Date()).getTime() })));
    case 'ALERT_HIDE':
      return state
        .set('alerts', state.get('alerts').filter((a) => a.get('id') !== payload));
    default:
      return state;
  }
}
