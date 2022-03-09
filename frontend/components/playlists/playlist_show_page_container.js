import { connect } from 'react-redux';
import PlaylistShowPage from './playlist_show_page'
import { setCurrentSong } from '../../actions/music_player_actions';
import { togglePlayback } from '../../actions/music_player_actions';


const mapStateToProps = ({session, entities: {playlists,player}},ownProps) => {
  const playlist = playlists[ownProps.match.params.playlistId];
  return {
    playlist,
    currentUser: session.currentUser,
    player
  };
};

const mapDispatchToProps = dispatch => ({
    setCurrentSong: song => dispatch(setCurrentSong(song)),
    togglePlayback: (currentSong,firstSongInPlaylist)=> {
      !currentSong ? dispatch(setCurrentSong(firstSongInPlaylist)) : dispatch(togglePlayback());
    },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistShowPage);