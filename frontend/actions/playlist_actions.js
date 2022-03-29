import * as PlaylistsAPIUtil from '../util/playlist_api_util';
export const RECEIVE_USER_PLAYLISTS = 'RECEIVE_USER_PLAYLISTS';
export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';
export const DELETE_PLAYLIST = 'DELETE_PLAYLIST';
export const UPDATE_PLAYLIST = 'UPDATE_PLAYLIST';
export const RECEIVE_PLAYLIST_SONG = 'RECEIVE_PLAYLIST_SONG';
export const REMOVE_PLAYLIST_SONG = 'REMOVE_PLAYLIST_SONG';

export const receiveUserPlaylists = playlists => ({
    type: RECEIVE_USER_PLAYLISTS,
    playlists
  });


export const receivePlaylist = playlist => ({
  type: RECEIVE_PLAYLIST,
  playlist
});

export const updatePlaylist = playlist => ({
  type: UPDATE_PLAYLIST,
  playlist
});

export const deletePlaylist = playlistId => ({
  type: DELETE_PLAYLIST,
  playlistId
});

export const receivePlaylistSong = (playlistId, song) => ({
  type: RECEIVE_PLAYLIST_SONG,
  song,
  playlistId
});

export const removePlaylistSong = (playlistId, songId) => ({
  type: REMOVE_PLAYLIST_SONG,
  songId,
  playlistId
});


// Thunk Action Creators
export const fetchUserPlaylists = () => dispatch => (
  PlaylistsAPIUtil.receiveUserPlaylists()
  .then(playlists => dispatch(receiveUserPlaylists(playlists)))
);

export const createPlaylist = playlist => dispatch => (
  PlaylistsAPIUtil.createPlaylist(playlist)
  .then(playlist => dispatch(receivePlaylist(playlist)))
);


export const removePlaylist = playlistId => dispatch => (
  PlaylistsAPIUtil.deletePlaylist(playlistId)
  .then(playlistId => dispatch(deletePlaylist(playlistId)))
);

export const editPlaylist = playlist => dispatch => {
  return PlaylistsAPIUtil.updatePlaylist(playlist)
  .then(playlist => {
    return dispatch(updatePlaylist(playlist))
  })
};

export const addSongToPlaylist = (playlistId, songId) => dispatch => (
  PlaylistsAPIUtil.addSongToPlaylist(playlistId, songId)
  .then((song) => dispatch(receivePlaylistSong(playlistId, song)))
);

export const removeSongFromPlaylist = (playlistId, songId) => dispatch => (
  PlaylistsAPIUtil.deleteSongFromPlaylist(playlistId, songId)
  .then(() => dispatch(removePlaylistSong(playlistId , songId)))
);