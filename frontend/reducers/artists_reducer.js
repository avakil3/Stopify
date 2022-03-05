import { RECEIVE_ARTIST, RECEIVE_ARTISTS } from '../actions/artist_actions';

const ArtistsReducer = ( state = {}, action ) => {
  Object.freeze(state);
  let newState = Object.assign({}, state)

  switch (action.type) {
      case RECEIVE_ARTISTS:
        return action.artists
    case RECEIVE_ARTIST:
      newState[action.artist.id] = action.artist
      return newState
    default:
      return state
  }
}

export default ArtistsReducer;