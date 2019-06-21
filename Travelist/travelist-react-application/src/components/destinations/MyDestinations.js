import React from 'react';
import DestinationCard from './DestinationCard';
import { connect } from 'react-redux'
import CardColumns from 'react-bootstrap/CardColumns'
import { deleteDestination } from '../../actions/destinationActions'


const MyDestinations = props => {
  const destinationCards = props.myDestinations.length > 0 ?
    props.myDestinations.map(destination =>
      <DestinationCard
        destination={destination}
        key={destination.id}
        deleteDestination={() => props.deleteDestination(destination.id)} />) :
    null

  return (
    <CardColumns>
      {destinationCards}
    </CardColumns>
  )
}

const mapStateToProps = state => {
  return {
    myDestinations: state.destinations.filter(d => d.attributes.user_id == state.currentUser.id)
  }
}


export default connect(mapStateToProps, { deleteDestination })(MyDestinations)