import { connect } from 'react-redux';
import SessionForm from './session_form';
import {signup, clearSessionErrors } from './../../actions/session_actions';

const msp = (state, ownProps) => ({
    errors: Array.from(state.errors.session),
    formType: 'signup',
    navType: 'login'
});

const mdp = (dispatch) => ({
    processForm: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearSessionErrors())
});

export default connect(msp,mdp)(SessionForm);