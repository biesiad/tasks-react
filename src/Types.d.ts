import { AlertsAction, AlertsState } from './AlertsReducer.d';
import { TasksAction, TasksState } from './TasksReducer.d';

type Dispatch = (action: Action) => void;
type GetState = () => State;
type ThunkAction = (dispatch: Dispatch, getState: GetState) => void;

export type Action =
  | AlertsAction
  | TasksAction;

export interface State {
  tasks: TasksState,
  alerts: AlertsState,
}