import { connect } from 'react-redux';
import Navbar from './navbar';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/ui_actions';
import { clearPost, getPosts } from '../../actions/post_actions';

const msp = (state) => ({
    currentUser: state.entities.users[state.session.id],
})

const mdp = (dispatch) => ({
    logout: () => dispatch(logout()),
    openProfile: () => dispatch(openModal("profile")),
    newPost: () => dispatch(openModal("newPost")),
    returnHome: () => {dispatch(clearPost())},
})

export default connect(msp, mdp)(Navbar);