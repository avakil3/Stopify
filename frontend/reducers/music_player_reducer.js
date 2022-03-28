import * as Actions from "../actions/music_player_actions";

const preloadedState={
    currentSong: null,
    currentSongIdx: null,
    playing: null,
    shuffle: false,
    playQueue: [],
    unshuffledQueue:[]
};


const MusicPlayerReducer = (state=preloadedState, action) => 
{
    Object.freeze(state);
    const newState = Object.assign({}, state);
    switch (action.type) {
        case Actions.SET_CURRENT_SONG:
            newState.currentSong = action.song;
            newState.currentSongIdx = newState.playQueue.findIndex(song => song.id === newState.currentSong.id);
            newState.playing = true; 
            return newState;
        case Actions.TOGGLE_PLAYBACK:
            newState.playing = !newState.playing;
            return newState;
        case Actions.SHUFFLE_PLAYBACK:
            newState.shuffle = !state.shuffle;
            if (newState.shuffle){
                newState.playQueue = shuffleArray(state.playQueue);
            }else{
                newState.playQueue = state.unshuffledQueue;
            }
            return newState;
        case Actions.PAUSE_SONG:
            newState.playing = false;
            return newState;
        case Actions.SET_QUEUE:
            newState.playQueue = (state.shuffle ? shuffleArray(action.queue) : action.queue);
            newState.unshuffledQueue = action.queue.slice();
            debugger
            return newState;
        case Actions.PREV_SONG:
           if(state.currentSongIdx > 0){
            newState.currentSong = state.playQueue[state.currentSongIdx-1];
            newState.currentSongIdx = state.currentSongIdx-1;
           }else{
            newState.currentSong = state.playQueue[state.playQueue.length-1];
            newState.currentSongIdx = state.playQueue.length-1; 
           }
            return newState;
        case Actions.NEXT_SONG:
            if(state.currentSongIdx < state.playQueue.length-1){
                newState.currentSong = state.playQueue[state.currentSongIdx+1];
                newState.currentSongIdx = state.currentSongIdx+1;
            }else{
                newState.currentSong = state.playQueue[0];
                newState.currentSongIdx = 0;
            }
                return newState;
        default:
            return state;
    }
  }
  
  export default MusicPlayerReducer;

// Fisher-Yates algorithm for array shuffling
  const shuffleArray = array => {
      const arr = array.slice();
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  }