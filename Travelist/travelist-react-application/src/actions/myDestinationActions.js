import { connect } from 'react-redux'

// synchronous actions
export const setMyDestinations = destinations => {
  return {
    type: "SET_MY_DESTINATIONS",
    destinations
  }
}

// async actions
const getMyDestinations = ({ currentUser }) => {
  return dispatch => {
    debugger
    return fetch(`http://localhost:3000/api/v1/users/${currentUser.id}/destinations`, {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          console.log(response.data)
          dispatch(setMyDestinations(response.data))
        }
      })
      .catch(console.log)
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(getMyDestinations)