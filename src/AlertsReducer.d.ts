export type AlertType = 'success' | 'error';

interface Alert {
  id: number,
  type: AlertType,
  message: string,
}

export interface AlertsState {
  alerts: Array<Alert>,
}

export interface ShowAlert {
  type: 'SHOW_ALERT',
  payload: {
    type: AlertType,
    message: string,
  },
}

export interface HideAlert {
  type: 'HIDE_ALERT',
  payload: number,
}

export type AlertsAction =
  | ShowAlert
  | HideAlert;
