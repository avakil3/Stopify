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
        case Actions.UPDATE_PLAYLIST:
            newState[action.playlist.id].playlist_name = action.playlist.playlist_name;
            return newState;
        case Actions.DELETE_PLAYLIST:
            delete newState[action.playlistId];
            return newState;
        case Actions.RECEIVE_PLAYLIST_SONG:
            newState[action.playlistId].songs[action.song.id] = action.song;
            return newState;
        case Actions.REMOVE_PLAYLIST_SONG:
            delete newState[action.playlistId].songs[action.songId];
            return newState;
        default:
            return state;
    }
  }
  
  export default PlaylistsReducer;