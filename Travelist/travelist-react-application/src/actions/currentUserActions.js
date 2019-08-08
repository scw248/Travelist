import { resetLoginForm } from "./loginFormActions"
import { resetSignupForm } from "./signupFormActions"
import { getDestinations } from "./destinationActions"

//synchronous action creators
export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    user
  }
}

export const clearCurrentUser = () => {
  return {
    type: "CLEAR_CURRENT_USER"
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
    type: "NEW_PINNED_DESTINATION",
    pinned_destination
  }
}

export const removePinnedDestination = id => {
  return {
    type: "REMOVE_PINNED_DESTINATION",
    id
  }
}

//asynchronous action creators
export const login = credentials => {
  console.log("credentials are", credentials)
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/login", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
      .then(r => r.json())
      .then(resp => {
        if (resp.error) {
          alert(resp.error)
        } else {
          dispatch(setCurrentUser(resp.data))
          dispatch(resetLoginForm())
        }
      })
      .catch(console.log)
  }
}

export const signup = credentials => {
  return dispatch => {
    const userInfo = {
      user: credentials
    }
    return fetch("http://localhost:3000/api/v1/signup", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(setCurrentUser(response.data))
          dispatch(resetSignupForm())
        }
      })
      .catch(console.log)
  }
}

export const logout = () => {
  return dispatch => {
    dispatch(clearCurrentUser())
    return fetch('http://localhost:3000/api/v1/logout', {
      credentials: "include",
      method: "DELETE"
    })
  }
}

export const getCurrentUser = () => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/get_current_user", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(resp => resp.json())
      .then(resp => {
        if (resp.error) {
          alert(resp.error)
        } else {
          dispatch(setCurrentUser(resp.data))
          dispatch(getDestinations())
          dispatch(getPinnedDestinations())
        }
      })
      .catch(console.log)
  }
}

export const getPinnedDestinations = (currentUser) => {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/users/${currentUser}/pins`, {
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
          response.data.forEach((pin) => {
            let pins = []
            return async function grabEachPinnedDestination(pin) {
              await fetch(`http://localhost:3000/api/v1/destinations/${pin.attributes.destination_id}`, {
                credentials: "include",
                method: "GET",
                headers: {
                  "Content-Type": "application/json"
                },
              }).then(response => response.json())
                .then(response => {
                  if (response.error) {
                    alert(response.error)
                  } else {
                    console.log(response)
                    pins.push(response)
                  }
                })
            })
        }
        dispatch(setPinnedDestinations(pins))
      }
})
}
}

// const grabEachPinnedDestination = pin => {
//   return fetch(`http://localhost:3000/api/v1/destinations/${pin.attributes.destination_id}`, {
//     credentials: "include",
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json"
//     },
//   }).then(response => response.json())
//     .then(response => {
//       if (response.error) {
//         alert(response.error)
//       } else {
//         console.log(response)
//       }
//     })
// }

export const deletePinnedDestination = (id, currentUser) => {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/users/${currentUser.id}/pins/${id}`, {
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
          dispatch(removePinnedDestination(id))
          dispatch(getPinnedDestinations())
        }
      })
  }
}

export const addPinnedDestination = (destId, currentUser) => {
  return dispatch => {

    return fetch(`http://localhost:3000/api/v1/users/${currentUser.id}/pins`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ destination_id: destId })
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(newPinnedDestination(response.data))
          dispatch(getPinnedDestinations())
        }
      })
      .catch(console.log)
  }
}