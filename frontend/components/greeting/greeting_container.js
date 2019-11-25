import {connect} from 'react-redux';
import Greeting from './greeting';
import {logout} from '../../actions/session_actions';
import {getPosts} from '../../actions/post_actions';

const msp = (state) => ({
    currentUser: state.entities.users[state.session.id], 
})

const mdp = (dispatch) => ({
    logout: () => dispatch(logout()),
})

export default connect(msp,mdp)(Greeting);