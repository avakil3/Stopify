import { connect } from 'react-redux';
import Body from './body';
import { togglePlayback } from '../../actions/music_player_actions';
import { setCurrentSong, setQueue } from '../../actions/music_player_actions';


const mapStateToProps = ({ session, entities: { albums, artists, playlists,songs,player, users } }) => ({
    songs,
    albums,
    artists,
    player,
    playlists,
    currentUser: (session.currentUser ? users[session.currentUser.id]: null)
});

const mapDispatchToProps = dispatch => ({
  togglePlayback: ()=> dispatch(togglePlayback()),
  setCurrentSong: (song) => dispatch(setCurrentSong(song)),
  setQueue: queue => dispatch(setQueue(queue))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Body);