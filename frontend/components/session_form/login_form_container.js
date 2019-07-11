import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, clearSessionErrors } from './../../actions/session_actions';

const msp = (state, ownProps) => ({
    errors: Array.from(state.errors.session),
    formType: 'login',
    navType: 'signup'
});

const mdp = (dispatch) => ({
    processForm: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearSessionErrors())
});

export default connect(msp, mdp)(SessionForm);