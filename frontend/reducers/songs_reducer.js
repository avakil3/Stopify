import { RECEIVE_SONG, RECEIVE_ALL_SONGS, SET_CURRENT_SONG } from '../actions/song_actions';

const SongsReducer = (state={}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_SONG:
            newState[action.song.id] = action.song;
            return newState;
        case RECEIVE_ALL_SONGS:
            return action.songs;
        case SET_CURRENT_SONG:
        return newState['currentSong'] = action.song;
        default:
            return state;
    }
  }
  
  export default SongsReducer;