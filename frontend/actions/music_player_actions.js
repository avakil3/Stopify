
export const SET_CURRENT_SONG = 'SET_CURRENT_SONG';
export const PAUSE_SONG = 'PAUSE_SONG';
export const PREV_SONG = 'PREV_SONG';
export const NEXT_SONG = 'NEXT_SONG';
export const SHUFFLE_PLAYBACK = 'SHUFFLE_PLAYBACK';
export const SET_QUEUE = 'SET_QUEUE';
export const TOGGLE_PLAYBACK = 'TOGGLE_PLAYBACK';


export const setCurrentSong = song => ({
  type: SET_CURRENT_SONG,
  song
});


export const pauseSong = () => ({
  type: PAUSE_SONG,
});

export const prevSong = () => ({
  type: PREV_SONG
});

export const nextSong = () => ({
  type: NEXT_SONG
});

export const shufflePlayback = () => ({
  type: SHUFFLE_PLAYBACK
});

export const togglePlayback = () => ({
  type: TOGGLE_PLAYBACK,
});

export const setQueue = queue => ({
  type: SET_QUEUE,
  queue
});