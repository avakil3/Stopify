import * as Actions from "../actions/music_player_actions";

const preloadedState={
    currentSong: null,
    playing: null,
    shuffle: null,
    playQueue: [],
};


const MusicPlayerReducer = (state=preloadedState, action) => 
{
    Object.freeze(state);
    const newState = Object.assign({}, state);
    switch (action.type) {
        case Actions.SET_CURRENT_SONG:
            newState.currentSong = action.song;
            newState.playing = true;
            return newState;
        case Actions.TOGGLE_PLAYBACK:
            newState.playing = !newState.playing;
            return newState;
        case Actions.PAUSE_SONG:
            newState.playing = false;
            return newState;
        default:
            return state;
    }
  }
  
  export default MusicPlayerReducer;