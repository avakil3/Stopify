import React from 'react';
import ReactDOM from 'react-dom';
//Components
import Root from './components/root';
import configureStore from './store/store';
import * as Actions from "./actions/session_actions"
import * as SongActions from "./actions/song_actions"
import * as AlbumActions from './actions/album_actions'
import * as PlaylistActions from './actions/playlist_actions'


document.addEventListener('DOMContentLoaded', () => {
  let store;
  
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
    
  } else {
    store = configureStore();
  }
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});

window.login = Actions.login;
window.signup = Actions.signup;
window.logout = Actions.logout;

window.fetchSongs = SongActions.fetchSongs;

window.fetchAlbums = AlbumActions.fetchAlbums;
window.fetchAlbum = AlbumActions.fetchAlbum;

window.fetchUserPlaylists = PlaylistActions.fetchUserPlaylists;
window.removePlaylist = PlaylistActions.removePlaylist;
window.createPlaylist = PlaylistActions.createPlaylist;