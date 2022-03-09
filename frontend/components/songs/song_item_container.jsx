import { connect } from 'react-redux';
import SongItem from './song_item';
import {setCurrentSong, setQueue} from '../../actions/music_player_actions'

const mapStateToProps = ({ session, entities: { songs, player} }) => ({
    songs,
    currentSong: player.currentSong
});

const mapDispatchToProps = dispatch => ({
  setCurrentSong: song => dispatch(setCurrentSong(song)),
  setQueue: queue => dispatch(setQueue(queue)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongItem);