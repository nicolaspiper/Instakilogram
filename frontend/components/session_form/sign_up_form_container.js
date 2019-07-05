import { connect } from 'react-redux';
import SessionForm from './session_form';
import {signup} from './../../actions/session_actions';

const msp = (state, ownProps) => ({
    errors: Object.values(state.errors),
    formType: 'signup',
    navType: 'login'
});

const mdp = (dispatch) => ({
    processForm: (user) => dispatch(signup(user)),
});

export default connect(msp,mdp)(SessionForm);