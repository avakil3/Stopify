import { connect } from 'react-redux';
import Header from './header';
import { logout } from '../../actions/session_actions';
// import { fetchUsers } from '../../actions/user_actions';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: (session.currentUser ? users[session.currentUser.id]: null)
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  // fetchUsers: ()=> dispatch(fetchUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);