import React from 'react';
import DestinationCard from './DestinationCard';
import { connect } from 'react-redux'
import CardColumns from 'react-bootstrap/CardColumns'
import { deleteDestination } from '../../actions/destinationActions'
import { addPinnedDestination } from '../../actions/currentUserActions'

const Destinations = props => {
  const destinationCards = props.destinations.length > 0 ?
    props.destinations.map(destination =>
      <DestinationCard
        destination={destination}
        key={destination.id}
        deleteDestination={props.deleteDestination}
        addPinnedDestination={props.addPinnedDestination} />) :
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


export default connect(mapStateToProps, { deleteDestination, addPinnedDestination })(Destinations)

