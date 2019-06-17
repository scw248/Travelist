import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'

const DestinationCard = ({ destination }) => {
  return (
    <React.Fragment>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={destination.attributes.image} />
        <Card.Body>
          <Card.Title>{destination.attributes.name}</Card.Title>
          <Card.Text>
            <div>{destination.attributes.city}, {destination.attributes.state} {destination.attributes.country}</div>
            <div>
              Votes: {destination.attributes.votes}
              <br />
              Price: {destination.attributes.price}
              <br />
              Categories: {destination.attributes.categories}
            </div>
            <Nav.Item>
              <Nav.Link href={destination.attributes.description}>
                Description
              </Nav.Link>
            </Nav.Item>

            {destination.attributes.description}

          </Card.Text>
          <Button variant="primary">Pin It!</Button>
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