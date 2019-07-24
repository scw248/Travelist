export default (state = null, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return action.user
    case "CLEAR_CURRENT_USER":
      return null
    case "SET_PINNED_DESTINATIONS":
      return { ...state, relationships: { ...state.relationships, pins: action.pinned_destinations } }
    case "NEW_PINNED_DESTINATION":
      return {
        ...state,
        relationships: {
          ...state.relationships,
          pins: [
            ...state.relationships.pins,
            { id: action.id, type: "pin", attributes: { 
            destination_id: action.destination_id, 
            name: action.name,
            city: action.city,
            state: action.state,
            country: action.country,
            price: action.price,
            description: action.description,
            image: action.image} }
            //add what debugger returns for pinned_destination for action. for id and destination_id
          ]
        }
      }

    case "REMOVE_PINNNED DESTINATION":
      return {
        ...state,
        relationships: {
          ...state.relationships,
          pinned_destinations: {
            data: [
              ...state.relationships.pins.filter(pin => pin.id !== action.id)]
            //Check that action.id is correct or if action.destination_id when inspecting debugger
          }
        }
      }
    default:
      return state
  }
}