import React, {Component} from 'react';

class UI extends Component {
  componentDidMount() {
    const formattedDate = this.formatDate(this.props.datetime);

    this.props.element.innerHTML = formattedDate;
  }

  formatDate(datetime) {
    const date = new Date(datetime);

    return `${date.toLocaleTimeString()}, ${date.toLocaleDateString()}`;
  }

  render() {
    return null;
  }
}

export default UI;
