// @flow

import type { RecordFactory, RecordOf } from 'immutable';
import { List, Record } from 'immutable';


type TaskProps = {
  id: number,
  title: string,
};
export const makeTask: RecordFactory<TaskProps> = Record({ id: 0, title: "" });
type Task = RecordOf<TaskProps>;


type AlertProps = {
  id: number,
  type: 'success' | 'error',
  message: string,
};
export const makeAlert: RecordFactory<AlertProps> = Record({ id: 0, type: 'sucess', message: "" });
type Alert = RecordOf<AlertProps>;


type StateProps = {
  tasks: List<Task>,
  savedTasks: List<Task>,
  isLOading: boolean,
  isSaving: boolean,
  alerts: List<Alert>,
};
type State = RecordOf<StateProps>;
