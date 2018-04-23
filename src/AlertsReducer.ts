import { AlertsAction, AlertsState, AlertType, ShowAlert, HideAlert } from "./AlertsReducer.d";

const initialState: AlertsState = {
  alerts: [],
};

export default (state = initialState, action: AlertsAction): AlertsState => {
  switch (action.type) {
    case 'SHOW_ALERT':
      return { ...state, alerts: [...state.alerts, { ...action.payload, id: (new Date()).getTime() }] };
    case 'HIDE_ALERT':
      return { ...state, alerts: state.alerts.filter((a) => a.id !== action.payload) }
    default:
      return state;
  }
}

export const showAlert = (type: AlertType, message: string): ShowAlert => ({
  type: 'SHOW_ALERT',
  payload: { type, message }
});

export const hideAlert = (id: number): HideAlert => ({
  type: 'HIDE_ALERT',
  payload: id
});