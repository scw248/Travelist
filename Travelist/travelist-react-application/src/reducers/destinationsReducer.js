export default (state = [], action) => {
  switch (action.type) {
    case "SET_DESTINATIONS":
      return action.destinations
    case "NEW_DESTINATION":
      return [...state, action.destination]
    case "REMOVE_DESTINATION":
      return state.filter(destination => destination.id !== action.id);
    case "ADD_PIN":
      return [...state, action.pinned_destination]
    case "REMOVE_PIN":
      return state.filter(pin => pin.destination_id !== action.id)
    default:
      return state
  }
}

