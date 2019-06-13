import React, { Component } from 'react';
import Destination from './Destination';

class Destinations extends Component {

  render() {
    const { destinations, deleteDestination } = this.props;
    const allDestinations = destinations.map(destination => {
      return (
        <Destination
          key={destination.id}
          destination={destination}
          deleteDestination={deleteDestination}
        />
      )
    });

    return (
      <ul>
        {allDestinations}
      </ul>
    );
  }
}

export default Destinations