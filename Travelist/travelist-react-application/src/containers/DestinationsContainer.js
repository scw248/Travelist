import React, { Component } from 'react';
import DestinationInput from '../components/destinations/DestinationInput'
import Destinations from '../components/destinations/Destinations'
import { connect } from 'react-redux'

class DestinationsContainer extends Component {
  render() {
    return (
      <div className="DestinationsContainer">
        <Destinations />
      </div>
    )
  }
}

export default DestinationsContainer


//       <div class="DestinationsContainer">
//         <DestinationInput addDestination={this.props.addDestination} />
//         <Destinations
//           destinations={this.props.destinations}
//           deleteDestination={this.props.deleteDestination}
//         />
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => ({ destinations: state.destinations })

// const mapDispatchToProps = dispatch => ({
//   addDestination: text => dispatch({ type: 'ADD_DESTINATION', text }),
//   deleteDestination: id => dispatch({ type: 'DELETE_DESTINATION', id })
// })


// export default connect(mapStateToProps, mapDispatchToProps)(DestinationsContainer)
