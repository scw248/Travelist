import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'

const DestinationCard = ({ destination, deleteDestination }) => {


  return (
    <React.Fragment>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={destination.attributes.image} />
        <Card.Body>
          <Card.Title>{destination.attributes.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{destination.attributes.city}, {destination.attributes.state} {destination.attributes.country}</Card.Subtitle>
          <Card.Text>
            <div>
              <strong>Price:</strong> {destination.attributes.price}
              <br />
              <strong>Categories:</strong> {destination.attributes.categories}
              <br />
              <strong>Description:</strong> {destination.attributes.description}
            </div>
          </Card.Text>
          <ButtonToolbar>
            <Button variant="primary">Pin It!</Button>
          </ButtonToolbar>
          <br />
          <ButtonToolbar>
            <Button onClick={() => deleteDestination(destination.id)} variant="danger" size="sm">Delete</Button>
          </ButtonToolbar>
          {/* <Button variant="secondary">Up Vote</Button>
          <Button variant="secondary">Down Vote</Button> */}
          {/* This will be an add-on feature at a later time with destination.attributes.votes  */}
        </Card.Body>
      </Card>
    </React.Fragment>
  )
}

export default DestinationCard





