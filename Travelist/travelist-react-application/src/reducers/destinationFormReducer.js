const initialState = {
  name: "",
  city: "",
  state: "",
  country: "",
  price: "",
  description: "",
  image: "",
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_DESTINATION_FORM":
      return action.formData
    case "RESET_DESTINATION_FORM":
      return initialState
    default:
      return state
  }
}