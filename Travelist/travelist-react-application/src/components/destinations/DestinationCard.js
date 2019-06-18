import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const DestinationCard = ({ destination }) => {
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
          <Button variant="primary">Pin It!</Button>
          {/* <Button variant="secondary">Up Vote</Button>
          <Button variant="secondary">Down Vote</Button> */}
          {/* This will be an add-on feature at a later time with destination.attributes.votes  */}
        </Card.Body>
      </Card>
    </React.Fragment>
  )
}

export default DestinationCard






// import React, { Component } from 'react';
// class Destination extends Component {

//   handleOnClick() {
//     this.props.deleteDestination(this.props.restaurant.id);
//   }

//   render() {
//     const { destination } = this.props;

//     return (
//       <div>
//         <li>
//           {destination.text}
//           <button onClick={() => this.handleOnClick()}> Delete </button>
//         </li>
//       </div>
//     );
//   }
// }

// export default Destination;