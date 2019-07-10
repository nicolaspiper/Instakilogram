import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from './../../actions/session_actions';

const msp = (state, ownProps) => ({
    errors: Object.values(state.errors),
    formType: 'login',
    navType: 'signup'
});

const mdp = (dispatch) => ({
    processForm: (user) => dispatch(login(user)),
});

export default connect(msp, mdp)(SessionForm);