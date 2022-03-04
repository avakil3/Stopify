
import * as AlbumAPIUtils from '../util/album_api_util';

export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';
export const RECEIVE_ALBUM ='RECEIVE_ALBUM';

const receiveAlbums = albums => ({
    type: RECEIVE_ALBUMS,
    albums
  })
  
  export const receiveAlbum = album => ({
    type: RECEIVE_ALBUM,
    album
  })

  export const fetchAlbums = () => dispatch => (
    AlbumAPIUtils.fetchAlbums().then(albums => {
      dispatch(receiveAlbums(albums)
    )})
  );
  
  export const fetchAlbum = albumId => dispatch => (
    AlbumAPIUtils.fetchAlbum(albumId).then(album => {
      dispatch(receiveAlbum(album))
    })
  );