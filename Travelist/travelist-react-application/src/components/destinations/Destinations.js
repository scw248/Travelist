import React from 'react';
import DestinationCard from './DestinationCard';
import { connect } from 'react-redux'
import CardColumns from 'react-bootstrap/CardColumns'
import { deleteDestination } from '../../actions/destinationActions'

const Destinations = props => {
  const destinationCards = props.destinations.length > 0 ?
    props.destinations.map(destination =>
      <DestinationCard
        destination={destination}
        key={destination.id}
        deleteDestination={props.deleteDestination} />) :
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


export default connect(mapStateToProps, { deleteDestination })(Destinations)

