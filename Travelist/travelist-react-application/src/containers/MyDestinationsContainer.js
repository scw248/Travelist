import React from 'react';
import DestinationInput from '../components/destinations/DestinationInput'
import MyDestinations from '../components/destinations/MyDestinations'
import { connect } from 'react-redux'

const MyDestinationsContainer = ({ currentUser }) => {
  return (
    <div className="DestinationsContainer">
      {currentUser ? <p><DestinationInput /> <MyDestinations /> </p> : ""}

    </div>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(MyDestinationsContainer)
