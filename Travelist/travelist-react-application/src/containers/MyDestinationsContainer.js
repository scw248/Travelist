import React from 'react';
import DestinationInput from '../components/destinations/DestinationInput'
import MyDestinations from '../components/destinations/MyDestinations'
import { connect } from 'react-redux'
import { addDestination } from '../actions/myDestinationActions'

const MyDestinationsContainer = ({ currentUser }) => {
  return (
    <div className="DestinationsContainer">
      {currentUser ?
        <p><DestinationInput addDestination={addDestination} />
          <MyDestinations /> </p>
        : ""}

    </div>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, { addDestination })(MyDestinationsContainer)
