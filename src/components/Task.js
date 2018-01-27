import React, { Component } from 'react';

class Task extends Component {
  componentDidMount() {
    this.textInput.focus();
  }

  render() {
    return (
      <div className="task" key={this.props.task.id}>
        <input className="task-input" ref={(input) => this.textInput = input} type="text" value={this.props.task.title} onChange={this.props.onChange}/>
        <i className="fa fa-trash-o task-delete" onClick={this.props.onDelete} />
      </div>
    );
  }
}

export default Task;
