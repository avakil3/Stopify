import { connect } from 'react-redux';
import AlbumShowPage from './album_show_page';
import {fetchAlbums} from '../../actions/album_actions';
import {fetchArtists} from "../../actions/artist_actions"
import {AlbumSongsSelector} from '../../util/selectors';
import { togglePlayback } from '../../actions/music_player_actions';
import { setCurrentSong, setQueue } from '../../actions/music_player_actions';


const mapStateToProps = ({entities: {songs,albums,artists,player}},ownProps) => {
  const album = albums[ownProps.match.params.albumId];
  return {
    album: album,
    artists,
    album_songs: AlbumSongsSelector(songs,ownProps.match.params.albumId),
    player
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAlbums: ()=> dispatch(fetchAlbums()),
  fetchArtists: ()=> dispatch(fetchArtists()),
  togglePlayback: ()=> dispatch(togglePlayback()),
  setCurrentSong: (song) => dispatch(setCurrentSong(song)),
  setQueue: queue => dispatch(setQueue(queue))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumShowPage);