import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import { connect } from 'react-redux'

const DestinationCard = ({ destination, deleteDestination, addPinnedDestination, currentUser }) => {
  return (
    <React.Fragment>
      <Card style={{ width: '22rem' }}>
        <Card.Img variant="top" src={destination.attributes.image} />
        <Card.Body>
          <Card.Title>{destination.attributes.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{destination.attributes.city}, {destination.attributes.state} ({destination.attributes.country})</Card.Subtitle>
          <Card.Text>
            <div>
              <strong>Price:</strong> {destination.attributes.price}
              <br />
              {/* <strong>Categories:</strong> {destination.attributes.categories}
              <br /> WILL ADD THIS BACK IN WHEN CATEGORY COMPONENT IS BUILT*/}
              <strong>Description:</strong> {destination.attributes.description}
            </div>
          </Card.Text>
          {/* PICK UP HERE TO FIGURE OUT HOW TO MAKE SURE 'PIN IT' BUTTON DOES NOT SHOW UP AFTER ALREADY BEING CLICKED, BUT OTHERWISE DOES */}
          {(destination.attributes.user_id != currentUser.id) && (currentUser.relationships.pins.forEach(pin => pin.attributes.destination_id !== destination.id)) ?
            <ButtonToolbar>
              <Button onClick={() => { addPinnedDestination(destination.id, currentUser) }} variant="primary" size="sm">Pin it!</Button>
            </ButtonToolbar>
            : ''
          }
          {destination.attributes.user_id == currentUser.id ?
            <ButtonToolbar>
              <Button onClick={() => { deleteDestination(destination.id, currentUser) }} variant="danger" size="sm">Delete</Button>
            </ButtonToolbar>
            : ''
          }
          {/* <Button variant="secondary">Up Vote</Button>
          <Button variant="secondary">Down Vote</Button> */}
          {/* This will be an add-on feature at a later time with destination.attributes.votes  */}
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

export default connect(mapStateToProps)(DestinationCard)





