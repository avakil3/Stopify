import { connect } from 'react-redux';
import Footer from './footer';
import * as MusicPlayerActions from '../../actions/music_player_actions';

const mapStateToProps = ({entities: { player } }) => {
  return {
    player: player,
    musicPlayer: document.getElementById("music-player")
  };
};

const mapDispatchToProps = dispatch => ({
  togglePlayback: ()=> dispatch(MusicPlayerActions.togglePlayback()) 
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);