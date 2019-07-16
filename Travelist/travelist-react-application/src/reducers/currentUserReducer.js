export default (state = null, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return action.user
    case "CLEAR_CURRENT_USER":
      return null
    case "ADD_PINNED_DESTINATION":
      return {
        ...state,
        relationships: {
          ...state.relationships,
          pinned_destinations: {
            data: [
              ...state.relationships.pinned_destinations.data,
              action.pinned_destination
            ]
          }
        }
      }
    case "REMOVE_PINNNED DESTINATION":
      return {
        ...state,
        relationships: {
          ...state.relationships,
          pinned_destinations: {
            data: [
              ...state.relationships.pinned_destinations.data.filter(pinned_destination => pinned_destination.id !== action.id)]
          }
        }
      }
    default:
      return state
  }
}