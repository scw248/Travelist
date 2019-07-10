
export const setDestinations = destinations => {
  return {
    type: 'SET_DESTINATIONS',
    destinations
  }
}

export const removeDestination = id => {
  return {
    type: "REMOVE_DESTINATION",
    id
  }
}

export const setPinnedDestinations = pinned_destinations => {
  return {
    type: 'SET_PINNED_DESTINATIONS',
    pinned_destinations
  }
}

export const newPinnedDestination = pinned_destination => {
  return {
    type: "NEW_DESTINATION",
    pinned_destination
  }
}

export const removePinnedDestination = destination_id => {
  return {
    type: "REMOVE_PINNED_DESTINATION",
    destination_id
  }
}

//asynchronous action creators
export const getDestinations = () => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/destinations", {
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
          dispatch(setDestinations(response.data))
        }
      })
      .catch(console.log)
  }
}

export const deleteDestination = (id, currentUser) => {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/users/${currentUser.id}/destinations/${id}`, {
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