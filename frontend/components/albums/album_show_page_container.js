import { connect } from 'react-redux';
import AlbumShowPage from './album_show_page';
import {fetchAlbums} from '../../actions/album_actions';
import {fetchArtists} from "../../actions/artist_actions"
import {AlbumSongsSelector} from '../../util/selectors';


const mapStateToProps = ({entities: {songs,albums,artists}},ownProps) => {
  const album = albums[ownProps.match.params.albumId];
  return {
    album: album,
    artists: artists,
    album_songs: AlbumSongsSelector(songs,ownProps.match.params.albumId)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAlbums: ()=> dispatch(fetchAlbums()),
  fetchArtists: ()=> dispatch(fetchArtists()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumShowPage);