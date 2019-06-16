
export const setDestinations = destinations => {
  return {
    type: 'SET_DESTINATIONS',
    destinations
  }
}

//asynchronous action creators
export const getDestinations = () => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/destinations", {
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



// //synchronous action creators
// export const loadDestinations = destinations => {
//   return {
//     type: 'LOADING_DESTINATIONS',
//     destinations
//   }
// }

// //asynchronous action creators
// export const getDestinations = () => {
//   return dispatch => {
//     return fetch("http://localhost:3001/api/v1/destinations", {
//       credentials: "include",
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json"
//       },
//     })
//       .then(r => r.json())
//       .then(response => {
//         if (response.error) {
//           alert(response.error)
//         } else {
//           console.log(response.data)
//           dispatch(loadDestinations(response.data))
//         }
//       })
//       .catch(console.log)
//   }
// }