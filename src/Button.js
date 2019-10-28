import React from 'react';
import ReactDOM from 'react-dom';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      status: 'on',
    };
  }

  handleClick() {
    const { status } = this.state;
    if (status === 'on') {
      this.setState({status: 'off'});
    } else {
      this.setState({status: 'on'});
    }
  }

  render() {
    const { status } = this.state;
    return (
      <button onClick={this.handleClick}>{status.toUpperCase()}</button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);