import React from 'react';
import DestinationCard from './DestinationCard';
import { connect } from 'react-redux'
import CardColumns from 'react-bootstrap/CardColumns'


const MyDestinations = props => {

  const destinationCards = props.myDestinations.length > 0 ?
    props.myDestinations.map(destination => <DestinationCard destination={destination} key={destination.id} />) :
    null

  return (
    <CardColumns>
    {destinationCards}
  </CardColumns>
  )
}

const mapStateToProps = state => {
  return {
    myDestinations: state.myDestinations
  }
}


export default connect(mapStateToProps)(MyDestinations)