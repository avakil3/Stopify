import * as PlaylistsAPIUtil from '../util/playlist_api_util';
export const RECEIVE_USER_PLAYLISTS = 'RECEIVE_USER_PLAYLISTS';
export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';
export const DELETE_PLAYLIST = 'DELETE_PLAYLIST';

export const receiveUserPlaylists = playlists => ({
    type: RECEIVE_USER_PLAYLISTS,
    playlists
  });

  export const fetchUserPlaylists = () => dispatch => (
    PlaylistsAPIUtil.receiveUserPlaylists()
    .then(playlists => dispatch(receiveUserPlaylists(playlists)))
  );

  export const receivePlaylist = playlist => ({
    type: RECEIVE_PLAYLIST,
    playlist
  });

  export const createPlaylist = playlist => dispatch => (
    PlaylistsAPIUtil.createPlaylist(playlist)
    .then(playlist => dispatch(receivePlaylist(playlist)))
  );

  export const deletePlaylist = playlistId => ({
    type: DELETE_PLAYLIST,
    playlistId
  });

  export const removePlaylist = playlistId => dispatch => (
    PlaylistsAPIUtil.deletePlaylist(playlistId)
    .then(playlistId => dispatch(deletePlaylist(playlistId)))
  );