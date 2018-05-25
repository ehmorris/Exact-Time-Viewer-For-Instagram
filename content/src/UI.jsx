import React, {Component} from 'react';
import CopyToClipboard from './CopyToClipboard';

class UI extends Component {
  constructor(props) {
    super(props);

    this.state = { dateTimeInText: null };
  }

  componentDidMount() {
    const dateTimeInText = new Date(this.props.timestamp).toString();

    this.setState({dateTimeInText: dateTimeInText});
  }

  render() {
    return (
      <div
        style={{
          position: 'fixed',
          bottom: '0',
          color: '#fff',
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'center',
          background: 'red',
          left: '0',
          overflow: 'hidden',
          width: '100vw',
          height: '40px',
          zIndex: '100',
          flexDirection: 'column'
        }}
      >
        <CopyToClipboard content={this.props.timestamp} />
        {this.state.dateTimeInText}
      </div>
    );
  }
}

export default UI;
