export default (state = [], action) => {
  switch (action.type) {
    case "SET_MY_DESTINATIONS":
      return action.trips
    default:
      return state
  }
}