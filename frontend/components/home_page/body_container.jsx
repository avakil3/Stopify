import { connect } from 'react-redux';
import Body from './body';


const mapStateToProps = ({ session, entities: { albums, artists, playlists, users } }) => ({
    albums,
    artists,
    playlists,
    currentUser: (session.currentUser ? users[session.currentUser.id]: null)
});

const mapDispatchToProps = dispatch => ({
 
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Body);