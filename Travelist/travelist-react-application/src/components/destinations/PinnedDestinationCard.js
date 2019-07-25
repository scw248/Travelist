import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import { connect } from 'react-redux'

const PinnedDestinationCard = ({ pin, deletePinnedDestination, currentUser }) => {

  return (
    <React.Fragment>
      <Card style={{ width: '22rem' }}>
        <Card.Img variant="top" src={pin.attributes.image} />
        {/* FIGURE OUT HOW TO RENDER PIN DESTINATION ATTRIBUTES WITH DESTINATION_ID */}
        <Card.Body>
          <Card.Title>{pin.attributes.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{pin.attributes.city}, {pin.attributes.state} ({pin.attributes.country})</Card.Subtitle>
          <Card.Text>
            <div>
              <strong>Price:</strong> {pin.attributes.price}
              <br />
              {/* <strong>Categories:</strong> {destination.attributes.categories}
              <br /> WILL ADD THIS BACK IN WHEN CATEGORY COMPONENT IS BUILT*/}
              <strong>Description:</strong> {pin.attributes.description}
            </div>
          </Card.Text>
          {pin.attributes.user_id == currentUser.id ?
            <ButtonToolbar>
              <Button onClick={() => { deletePinnedDestination(pin.id, currentUser) }} variant="danger" size="sm">Remove Pin</Button>
            </ButtonToolbar>
            : ''
          }
        </Card.Body>
      </Card>
    </React.Fragment>
  )
}


const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(PinnedDestinationCard)