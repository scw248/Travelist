
export default (state = [], action) => {
  switch (action.type) {
    case "SET_MY_DESTINATIONS":
      return action.destinations
    case "ADD_DESTINATION":
      return [
        ...state,
        action.data
      ];
    case "REMOVE_DESTINATION":
      return state.filter(destination => destination.id !== action.id);
    default:
      return state
  }
}