import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const preloadedState = {6: {
  id: 6,
  username: "Demo",
}}

const usersReducer = (state = preloadedState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      if (action.currentUser) {
        return Object.assign({}, state, { [action.currentUser.id]: action.currentUser })
      }
    default:
      return state;
  }
}

export default usersReducer;
