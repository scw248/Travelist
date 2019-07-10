export default (state = [], action) => {
  switch (action.type) {
    case "SET_DESTINATIONS":
      return action.destinations
    case "NEW_DESTINATION":
      return [...state, action.destination]
    case "REMOVE_DESTINATION":
      return state.filter(destination => destination.id !== action.id);
    case "SET_PINNED_DESTINATIONS":
      return action.pinned_destinations
    case "ADD_PINNED_DESTINATION":
      return [...state, action.pinned_destination]
    case "REMOVE_PINNNED DESTINATION":
      return state.filter(pin => pin.destination_id !== action.destination_id)
    default:
      return state
  }
}

