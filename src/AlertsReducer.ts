const initialState: AlertsState = {
    alerts: [],
  };

export default (state = initialState, action: AlertAction): AlertsState => {
  switch (action.type) {
    case 'SHOW_ALERT':
    return { ...state, alerts: [...state.alerts, { ...action.payload, id: (new Date()).getTime() }] };
    case 'HIDE_ALERT':
    return { ...state, alerts: state.alerts.filter((a) => a.id !== action.payload) }
    default:
    return state;
  }
}
