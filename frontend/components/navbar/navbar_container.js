import { connect } from 'react-redux';
import Navbar from './navbar';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/ui_actions';

const msp = (state) => ({
    currentUser: state.entities.users[state.session.id],
})

const mdp = (dispatch) => ({
    logout: () => dispatch(logout()),
    openProfile: () => dispatch(openModal("profile")),
})

export default connect(msp, mdp)(Navbar);