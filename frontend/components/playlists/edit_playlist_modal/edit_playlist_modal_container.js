import EditPlaylistModal from './edit_playlist_modal';
import { connect } from 'react-redux';
import { editPlaylist, removePlaylist } from '../../../actions/playlist_actions';


const mapStateToProps = ({session, entities: {playlists,player}},ownProps) => {
  return {
    currentUser: session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
    editPlaylist: playlist => dispatch(editPlaylist(playlist)),
    removePlaylist: playlistId => dispatch(removePlaylist(playlistId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPlaylistModal);