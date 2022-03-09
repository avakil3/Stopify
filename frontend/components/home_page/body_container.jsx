import { connect } from 'react-redux';
import Body from './body';


const mapStateToProps = ({ entities: { albums, artists, playlists } }) => ({
    albums,
    artists,
    playlists,
});

const mapDispatchToProps = dispatch => ({
 
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Body);