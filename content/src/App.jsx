import React, {Component} from 'react';
import UI from './UI';

class App extends Component {
  constructor(props) {
    super(props);

    this.resetApp = this.resetApp.bind(this);
    this.state = { mediaUrl: null, mediaRect: null }
  }

  resetApp() {
    this.setState({ timestamp: null });
  }

  componentDidMount() {
    document.addEventListener('mousemove', ({clientX: x, clientY: y}) => {
      this.resetApp();

      const timeElement = this.timeAtPoint(x, y);

      if (timeElement) {
        const timestamp = timeElement.getAttribute('datetime');
        this.setState({ timestamp: timestamp });
      }
    }, true);
  }

  timeAtPoint(x, y) {
    const element = document.elementFromPoint(x, y);

    if (element.tagName === 'TIME') {
      return element;
    }
  }

  render() {
    if (this.state.timestamp) {
      return (
        <UI timestamp={this.state.timestamp} />
      );
    }

    return null;
  }
}

export default App;
