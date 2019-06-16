import React from 'react';
import DestinationCard from './DestinationCard';
import { connect } from 'react-redux'

const Destinations = props => {

  const destinationCards = props.destinations.length > 0 ?
    props.destinations.map(destination => <DestinationCard destination={destination} key={destination.id} />) :
    null

  return (
    destinationCards
  )
}

const mapStateToProps = state => {
  return {
    trips: state.destinations
  }
}


export default connect(mapStateToProps)(Destinations)