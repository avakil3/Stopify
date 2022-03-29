import { connect } from 'react-redux';
import SongItem from './song_item';
import {setCurrentSong, setQueue} from '../../actions/music_player_actions'
import {addSongToPlaylist, removeSongFromPlaylist} from '../../actions/playlist_actions';

const mapStateToProps = ({ session, entities: { songs, player, playlists} }) => ({
    songs,
    currentSong: player.currentSong,
    playlists
});

const mapDispatchToProps = dispatch => ({
  setCurrentSong: song => dispatch(setCurrentSong(song)),
  setQueue: queue => dispatch(setQueue(queue)),
  addSongToPlaylist: (playlistId,songId) => dispatch(addSongToPlaylist(playlistId,songId)),
  removeSongFromPlaylist: (playlistId,songId) => dispatch(removeSongFromPlaylist(playlistId,songId)),
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongItem);