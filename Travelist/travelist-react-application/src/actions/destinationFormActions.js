//synchronous actions
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

//asynchronous actins
export const addDestination = formData => {
  return dispatch => {
    const destinationInfo = {
      formData: formData
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
          dispatch(updateDestinationForm())
          dispatch(resetDestinationForm())
        }
      })
      .catch(console.log)
  }
}