import { connect } from 'react-redux';
import Search from './search';
// import {setCurrentSong, setQueue, togglePlayback} from '../../actions/music_player_actions'
// import {addSongToPlaylist, removeSongFromPlaylist} from '../../actions/playlist_actions';

const mapStateToProps = ({ session, entities: { songs, albums, artists} }) => ({
   songs,
   albums,
   artists
});

const mapDispatchToProps = dispatch => ({
//   setCurrentSong: song => dispatch(setCurrentSong(song)),
//   setQueue: queue => dispatch(setQueue(queue)),
//   addSongToPlaylist: (playlistId,songId) => dispatch(addSongToPlaylist(playlistId,songId)),
//   removeSongFromPlaylist: (playlistId,songId) => dispatch(removeSongFromPlaylist(playlistId,songId)),
//   togglePlayback: ()=> dispatch(togglePlayback()),
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);