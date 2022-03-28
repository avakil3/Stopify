import { connect } from 'react-redux';
import CreatePlaylistModal from './create_playlist_modal';
import { createPlaylist } from '../../../actions/playlist_actions';


const mapStateToProps = ({session, entities: {playlists,player}},ownProps) => {
  return {
    currentUser: session.currentUser,
    playlists
  };
};

const mapDispatchToProps = dispatch => ({
  createPlaylist: playlist => dispatch(createPlaylist(playlist))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePlaylistModal);