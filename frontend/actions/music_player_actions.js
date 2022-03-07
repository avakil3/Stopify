
export const SET_CURRENT_SONG = 'SET_CURRENT_SONG';
export const PAUSE_SONG = 'PAUSE_SONG';
export const TOGGLE_PLAYBACK = 'TOGGLE_PLAYBACK';


export const setCurrentSong = song => ({
  type: SET_CURRENT_SONG,
  song
});


export const pauseSong = () => ({
  type: PAUSE_SONG,
});

export const togglePlayback = () => ({
  type: TOGGLE_PLAYBACK,
});