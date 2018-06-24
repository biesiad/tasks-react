import * as React from 'react';

class Alert extends React.Component {
  render() {
    return (
      <div className={`alert alert-${this.props.alert.type}`} key={this.props.alert.id}>
        { this.props.alert.message }
        <i className="fa fa-times alert-close" onClick={this.props.onHide}></i>
      </div>
    );
  }
}

export default Alert;
