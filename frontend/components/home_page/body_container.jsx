import { connect } from 'react-redux';
import Body from './body';
// import {fetchSongs} from "../../actions/song_actions"
// import { fetchUsers } from '../../actions/user_actions';
// import { fetchAlbums } from '../../actions/album_actions';
// import { fetchArtists } from '../../actions/artist_actions';

const mapStateToProps = ({ session, entities: { songs, albums, artists } }) => ({
    songs: songs,
    albums: albums,
    artists: artists
});

const mapDispatchToProps = dispatch => ({
 
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Body);