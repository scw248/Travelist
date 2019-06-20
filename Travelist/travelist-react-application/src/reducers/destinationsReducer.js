export default (state = [], action) => {
  switch (action.type) {
    case "SET_DESTINATIONS":
      return action.destinations
    case "NEW_DESTINATION":
      return [...state, action.destination]
    default:
      return state
  }
}

