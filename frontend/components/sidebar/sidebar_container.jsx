import { connect } from 'react-redux';
import Sidebar from './sidebar';


const mapStateToProps = ({ session, entities: { playlists,users } }) => ({
    playlists,
    currentUser: (session.currentUser ? users[session.currentUser.id]: null)
});

const mapDispatchToProps = dispatch => ({
 
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar)