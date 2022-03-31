import { connect } from 'react-redux';
import ArtistShowPage from './artist_show_page';
import {fetchAlbums} from '../../actions/album_actions';
import {fetchArtists} from "../../actions/artist_actions"
import {ArtistSongsSelector} from '../../util/selectors';
import { togglePlayback } from '../../actions/music_player_actions';
import { setCurrentSong, setQueue } from '../../actions/music_player_actions';


const mapStateToProps = ({entities: {songs,albums,artists,player}},ownProps) => {
  const artist = artists[ownProps.match.params.artistId];
  return {
    albums,
    artist,
    artist_songs: ArtistSongsSelector(songs,ownProps.match.params.artistId),
    player:player
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
)(ArtistShowPage);