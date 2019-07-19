import React from 'react';
import DestinationCard from './DestinationCard';
import { connect } from 'react-redux'
import CardColumns from 'react-bootstrap/CardColumns'
import { deleteDestination } from '../../actions/destinationActions'
import { deletePinnedDestination, addPinnedDestination } from '../../actions/currentUserActions'

const MyDestinations = props => {
  const destinationCards = props.myDestinations.length > 0 ?
    props.myDestinations.map(destination =>
      <DestinationCard
        destination={destination}
        key={destination.id}
        deleteDestination={props.deleteDestination} />) :
    null

  const pinnedDestinationCards = props.myPinnedDestinations.length > 0 ?
    props.myPinnedDestinations.map(pinned_destination =>
      <DestinationCard
        destination={pinned_destination}
        key={pinned_destination.attributes.destination_id}
        deletePinnedDestination={props.deletePinnedDestination}
        addPinnedDestination={props.addPinnedDestination} />) :
    null

  return (
    <CardColumns >
      {destinationCards}
      {pinnedDestinationCards}
    </CardColumns>
  )
}

const mapStateToProps = state => {
  return {
    myDestinations: state.destinations.filter(d => d.attributes.user_id == state.currentUser.id),
    myPinnedDestinations: state.currentUser.pins
  }
}


export default connect(mapStateToProps, { deleteDestination, deletePinnedDestination, addPinnedDestination })(MyDestinations)