import cuid from 'cuid';
export const cuidFn = cuid;

export default function destinationsReducer(state = { destinations: [] }, action) {
  switch (action.type) {

    case 'ADD_DESTINATION':

      const destination = { text: action.text, id: cuidFn() };
      return {
        ...state,
        destinations: [...state.destinations, destination]
      }

    case 'DELETE_DESTINATION':
      const destinations = state.destinations.filter(destination => destination.id !== action.id);
      return { ...state, destinations }

    // case 'EDIT_DESTINATION':
    //   return {}

    // case 'LOADING_DESTINATIONS':
    //   return { ...state, loading: true };

    // case 'FETCH_DESTINATIONS':
    //   return { loading: false, pictures: [...action.payload] };

    default:
      return state;

  }
}