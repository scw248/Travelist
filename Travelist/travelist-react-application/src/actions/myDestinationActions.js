// synchronous actions
export const setMyDestinations = destinations => {
  return {
    type: "SET_MY_DESTINATIONS",
    destinations
  }
}

export const addDestination = data => {
  return {
    type: "ADD_DESTINATION",
    data
  }
}

export const removeDestination = id => {
  return {
    type: "REMOVE_DESTINATION",
    id
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


export const newDestination = data => {
  return dispatch => {
    const destinationInfo = {
      data: data
    }
    return fetch(`http://localhost:3000/api/v1/users/:userId/destinations`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(destinationInfo)
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(addDestination(response))
        }
      })
      .catch(console.log)
  }
}

export const deleteHome = id => {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/users/:userId/destinations/:destinationId`, {
      credentials: "include",
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(id)
    })
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          alert(data.error)
        } else {
          dispatch(removeDestination(id))
        }
      })
  }
}





