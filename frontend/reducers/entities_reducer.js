import { combineReducers } from 'redux';
import SongsReducer from './songs_reducer';
import usersReducer from './users_reducer';
import AlbumsReducer from './albums_reducer';

export default combineReducers({
  users: usersReducer,
  songs: SongsReducer,
  albums: AlbumsReducer,
});