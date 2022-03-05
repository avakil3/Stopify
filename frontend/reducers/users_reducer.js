import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USERS } from "../actions/user_actions";

const preloadedState = {18: {
  id: 18,
  username: "Demo",
}}

const usersReducer = (state = preloadedState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      if (action.currentUser) {
        return Object.assign({}, state, { [action.currentUser.id]: action.currentUser })
      }
    case RECEIVE_USERS:
      return Object.assign({},state, action.users);
    default:
      return state;
  }
}

export default usersReducer;  
