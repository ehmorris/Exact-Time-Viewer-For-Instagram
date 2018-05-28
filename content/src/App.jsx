import React, {Component} from 'react';
import UI from './UI';

class App extends Component {
  constructor(props) {
    super(props);

    this.resetApp = this.resetApp.bind(this);

    this.state = {
      datetime: null,
      timeElement: null
    };
  }

  resetApp() {
    this.setState({
      datetime: null,
      timeElement: null
    });
  }

  componentDidMount() {
    document.addEventListener('mousemove', ({clientX: x, clientY: y}) => {
      this.resetApp();

      const timeElement = this.timeAtPoint(x, y);

      if (timeElement) {
        const datetime = timeElement.getAttribute('datetime');

        this.setState({
          datetime: datetime,
          timeElement: timeElement
        });
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
    if (this.state.datetime) {
      return (
        <UI
          datetime={this.state.datetime}
          element={this.state.timeElement}
        />
      );
    }

    return null;
  }
}

export default App;
