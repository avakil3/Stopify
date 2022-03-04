import { connect } from 'react-redux';
import HomePage from './home_page';
import {fetchSongs} from "../../actions/song_actions"
import { fetchUsers } from '../../actions/user_actions';
import { fetchAlbums } from '../../actions/album_actions';

// const mapStateToProps = ({ session, entities: { users } }) => {
//   return {
//     currentUser: (session.currentUser ? users[session.currentUser.id]: null)
//   };
// };

const mapDispatchToProps = dispatch => ({
  fetchSongs: () => dispatch(fetchSongs()),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchAlbums: () => dispatch(fetchAlbums()),
});

export default connect(
  null,
  mapDispatchToProps
)(HomePage);