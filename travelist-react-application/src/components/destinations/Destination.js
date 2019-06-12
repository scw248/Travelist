import React, { Component } from 'react';

class Destination extends Component {

  handleOnClick() {
    this.props.deleteDestination(this.props.restaurant.id);
  }

  render() {
    const { destination } = this.props;

    return (
      <div>
        <li>
          {destination.text}
          <button onClick={() => this.handleOnClick()}> Delete </button>
        </li>
      </div>
    );
  }
}

export default Destination;