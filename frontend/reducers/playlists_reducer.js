import * as Actions from '../actions/playlist_actions'

const PlaylistsReducer = (state={}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case Actions.RECEIVE_USER_PLAYLISTS:
            newState = action.playlists;
            return newState;
        case Actions.RECEIVE_PLAYLIST:
            newState[action.playlist.id] = action.playlist;
            return newState;
        case Actions.DELETE_PLAYLIST:
            delete newState[action.playlistId];
            return newState;
        default:
            return state;
    }
  }
  
  export default PlaylistsReducer;