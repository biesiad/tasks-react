import React, { Component } from 'react';

class Alert extends Component {
  render() {
    return (
      <div className={`alert alert-${this.props.alert.get('type')}`} key={this.props.alert.get('id')}>
        {this.props.alert.get('message')}
        <i className="fa fa-times alert-close" onClick={this.props.onHide}></i>
      </div>
    );
  }
}

export default Alert;
