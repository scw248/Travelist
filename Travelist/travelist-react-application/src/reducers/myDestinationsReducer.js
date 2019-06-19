export default (state = [], action) => {
  switch (action.type) {
    case "SET_MY_DESTINATIONS":
      return action.destinations
    case "ADD_DESTINATIONS":
      return 
    default:
      return state
  }
}