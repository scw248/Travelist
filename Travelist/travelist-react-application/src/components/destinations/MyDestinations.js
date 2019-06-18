import React from 'react';
import DestinationCard from './DestinationCard';
import { connect } from 'react-redux'

const MyDestinations = props => {

  const destinationCards = props.myDestinations.length > 0 ?
    props.myDestinations.map(destination => <DestinationCard destination={destination} key={destination.id} />) :
    null

  return (
    destinationCards
  )
}

const mapStateToProps = state => {
  return {
    myDestinations: state.myDestinations
  }
}


export default connect(mapStateToProps)(MyDestinations)