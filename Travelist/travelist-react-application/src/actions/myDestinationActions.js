// import { connect } from 'react-redux'

// synchronous actions
export const setMyDestinations = destinations => {
  return {
    type: "SET_MY_DESTINATIONS",
    destinations
  }
}

export const updateDestinationForm = formData => {
  return {
    type: "UPDATE_DESTINATION_FORM",
    formData
  }
}

export const resetDestinationForm = () => {
  return {
    type: "RESET_DESTINATION_FORM"
  }
}

// async actions
export const getMyDestinations = () => {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/users/:userId/destinations`, {
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

export const addDestination = () => {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/users/:userId/destinations`, {
      credentials: "include",
      method: "POST",
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
