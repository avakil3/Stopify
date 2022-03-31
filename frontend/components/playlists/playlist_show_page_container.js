import { connect } from 'react-redux';
import PlaylistShowPage from './playlist_show_page'
import { togglePlayback } from '../../actions/music_player_actions';
import { setCurrentSong, setQueue } from '../../actions/music_player_actions';


const mapStateToProps = ({session, entities: {playlists,player}},ownProps) => {
  const playlist = playlists[ownProps.match.params.playlistId];
  return {
    playlists,
    playlist,
    currentUser: session.currentUser,
    player
  };
};

const mapDispatchToProps = dispatch => ({
  togglePlayback: ()=> dispatch(togglePlayback()),
  setCurrentSong: (song) => dispatch(setCurrentSong(song)),
  setQueue: queue => dispatch(setQueue(queue))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistShowPage);