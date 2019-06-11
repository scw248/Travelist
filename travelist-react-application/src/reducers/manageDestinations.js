import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageDestinations(state = { destinations: [], }, action) {
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


    default:
      return state;

  }
}