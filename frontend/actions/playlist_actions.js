import * as PlaylistsAPIUtil from '../util/playlist_api_util';
export const RECEIVE_USER_PLAYLISTS = 'RECEIVE_USER_PLAYLISTS';

export const receiveUserPlaylists = playlists => ({
    type: RECEIVE_USER_PLAYLISTS,
    playlists
  });

  export const fetchUserPlaylists = () => dispatch => (
    PlaylistsAPIUtil.receiveUserPlaylists()
    .then(playlists => dispatch(receiveUserPlaylists(playlists)))
  );