import React from 'react'

const DestinationCard = ({ destination }) => {
  return (
    <React.Fragment>
      <p>{destination.attributes.image}</p>
      <p>{destination.attributes.name}</p>
      <p>{destination.attributes.votes}</p>
      <p>{destination.attributes.price}</p>
      <p>{destination.attributes.description}</p>
      <p>{destination.attributes.city}</p>
      <p>{destination.attributes.state}</p>
      <p>{destination.attributes.country}</p>
      <p>{destination.attributes.categories}</p>
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