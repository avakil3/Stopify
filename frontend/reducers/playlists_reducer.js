import * as Actions from '../actions/playlist_actions'

const PlaylistsReducer = (state={}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case Actions.RECEIVE_USER_PLAYLISTS:
            newState = action.playlists;
            return newState;
   
        default:
            return state;
    }
  }
  
  export default PlaylistsReducer;