import { combineReducers } from 'redux';
import SongsReducer from './songs_reducer';
import usersReducer from './users_reducer';
import AlbumsReducer from './albums_reducer';
import ArtistsReducer from './artists_reducer';
import MusicPlayerReducer from './music_player_reducer';

export default combineReducers({
  users: usersReducer,
  songs: SongsReducer,
  albums: AlbumsReducer,
  artists: ArtistsReducer,
  player: MusicPlayerReducer
});