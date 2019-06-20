import React from 'react';
import DestinationCard from './DestinationCard';
import { connect } from 'react-redux'
import CardColumns from 'react-bootstrap/CardColumns'

const Destinations = props => {
  const destinationCards = props.destinations.length > 0 ?
    props.destinations.map(destination =>
      <DestinationCard
        destination={destination}
        key={destination.id} />) :
    null

  return (
    <CardColumns>
      {destinationCards}
    </CardColumns>
  )
}

const mapStateToProps = state => {
  return {
    destinations: state.destinations
  }
}


export default connect(mapStateToProps)(Destinations)

// class Destinations extends Component {

//   render() {
//     const { destinations, deleteDestination } = this.props;
//     const allDestinations = destinations.map(destination => {
//       return (
//         <Destination
//           key={destination.id}
//           destination={destination}
//           deleteDestination={deleteDestination}
//         />
//       )
//     });

//     return (
//       <ul>
//         {allDestinations}
//       </ul>
//     );
//   }
// }

// export default Destinations