import React, {Component} from 'react';

class UI extends Component {
  componentDidMount() {
    const formattedDate = this.formatDate(this.props.datetime);

    this.props.element.innerHTML = formattedDate;
  }

  formatDate(datetime) {
    const dateObject = new Date(datetime);

    const time = dateObject.toLocaleTimeString();
    const date = dateObject.toLocaleDateString();
    const localTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    return `${time}, ${date} (in the ${localTimeZone} time zone)`;
  }

  render() {
    return null;
  }
}

export default UI;
