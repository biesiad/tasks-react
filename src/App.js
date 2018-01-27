import React, { Component } from 'react';
import { connect } from 'react-redux'
import Task from './components/Task.js';
import Alert from './components/Alert.js';
import { addTask, deleteTask, changeTask, loadTasks, saveTasks, hideAlert } from './Actions.js';


class App extends Component {
  componentDidMount() {
    this.props.loadTasks();
  }

  render() {
    return (
      <div>
        <div className="header"></div>
        <div className="container">
          <div className="subheader">
            <h1>Tasks</h1>
            <div className="subheader-buttons">
              <button className="button" disabled={this.props.isLoading} onClick={this.props.addTask}>Add task</button>
              <button className="button button-primary" disabled={saveDisabled(this.props)} onClick={() => this.props.saveTasks(this.props.tasks)}>Save</button>
            </div>
          </div>

          {this.props.isLoading ?
            <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw loader" />
            :
            this.props.tasks.map((task) => (
              <Task
                key={task.get('id')}
                task={task}
                onDelete={(e) => this.props.deleteTask(task.get('id'))}
                onChange={(e) => this.props.changeTask(task.get('id'), e.target.value)}
              />
            ))
          }

          <div className="alerts">
            {this.props.alerts.map((alert) => (
              <Alert
                key={alert.get('id')}
                alert={alert}
                onHide={(e) => this.props.hideAlert(alert.get('id'))}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const saveDisabled = (props) =>
  props.isLoading || props.isSaving || (props.tasks.reduce((acc, t) => acc + t.get('id') + t.get('title'), "") === props.savedTasks.reduce((acc, t) => acc + t.get('id') + t.get('title'), ""));

const mapStateToProps = (state) => ({
  tasks: state.get('tasks'),
  savedTasks: state.get('savedTasks'),
  isLoading: state.get('isLoading'),
  isSaving: state.get('isSaving'),
  alerts: state.get('alerts'),
});

const mapDispatchToProps = (dispatch) => ({
  addTask: () => dispatch(addTask()),
  deleteTask: (id) => dispatch(deleteTask(id)),
  changeTask: (id, title) => dispatch(changeTask(id, title)),
  loadTasks: () => dispatch(loadTasks()),
  saveTasks: (tasks) => dispatch(saveTasks(tasks)),
  hideAlert: (id) => dispatch(hideAlert(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
