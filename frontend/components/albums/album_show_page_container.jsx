import { connect } from 'react-redux';
import AlbumShowPage from '../albums/album_show_page';


const mapStateToProps = (state,ownProps) => {
  return {
    album: state.entities.albums[ownProps.match.params.albumId],
  };
};

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumShowPage);