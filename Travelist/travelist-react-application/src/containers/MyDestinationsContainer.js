import React from 'react';
import DestinationInput from '../components/destinations/DestinationInput'
import MyDestinations from '../components/destinations/MyDestinations'
import { connect } from 'react-redux'
import { addDestination } from '../actions/destinationFormActions'
import Button from 'react-bootstrap/Button'

const MyDestinationsContainer = ({ currentUser }) => {
  return (
    <div className="DestinationsContainer">
      {currentUser ?
        <p>
          <Button>
            <DestinationInput addDestination={addDestination} />
          </Button>
          <br />
          <br />
          <MyDestinations />
        </p>
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
