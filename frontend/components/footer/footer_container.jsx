import { connect } from 'react-redux';
import Footer from './footer';
import * as MusicPlayerActions from '../../actions/music_player_actions';
import { withRouter } from "react-router";

const mapStateToProps = ({entities: { player } }) => {
  return {
    player,
    musicPlayer: document.getElementById("music-player"),
  };
};

const mapDispatchToProps = dispatch => ({
  togglePlayback: ()=> dispatch(MusicPlayerActions.togglePlayback()),
  prevSong: ()=> dispatch(MusicPlayerActions.prevSong()), 
  nextSong: ()=> dispatch(MusicPlayerActions.nextSong()), 
  shufflePlayback: ()=> dispatch(MusicPlayerActions.shufflePlayback()), 
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer));