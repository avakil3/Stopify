import { RECEIVE_SONG, RECEIVE_ALL_SONGS } from '../actions/song_actions';

const SongsReducer = (state={}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);

    switch (action.type) {
    
        case RECEIVE_SONG:
            console.log(action.song)
            newState[action.song.id] = action.song;
            return newState;
        case RECEIVE_ALL_SONGS:
            return action.songs;
        default:
            return state;
    }
  }
  
  export default SongsReducer;