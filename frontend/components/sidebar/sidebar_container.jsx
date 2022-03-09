import { connect } from 'react-redux';
import Sidebar from './sidebar';


const mapStateToProps = ({ entities: { playlists } }) => ({
    playlists,
});

const mapDispatchToProps = dispatch => ({
 
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);