import { connect } from 'react-redux';
import SongItem from './song_item';
import {setCurrentSong} from '../../actions/music_player_actions'

const mapStateToProps = ({ session, entities: { songs, albums, artists } }) => ({
    songs
});

const mapDispatchToProps = dispatch => ({
  setCurrentSong: song => dispatch(setCurrentSong(song))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongItem);