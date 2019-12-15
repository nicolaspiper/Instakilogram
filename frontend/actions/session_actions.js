import * as SessionAPI from './../utils/session_api_util';
import { clearPost } from './post_actions';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT = "LOGOUT";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";

export const clearSessionErrors = () => ({
    type: CLEAR_SESSION_ERRORS,
    errors: []
});

export const receiveCurrentUser = (currentUser) =>({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const receiveErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const logoutCurrentUser = () => ({
    type: LOGOUT
});

export const signup = (user) => dispatch => (
    SessionAPI.signup(user).then(
        user => dispatch(receiveCurrentUser(user)), 
        errors => dispatch(receiveErrors(errors.responseJSON))
        )
);

export const login = (user) => dispatch => (
    SessionAPI.login(user).then(
        user => dispatch(receiveCurrentUser(user)),
        errors => dispatch(receiveErrors(errors.responseJSON))
    )
);

export const logout = () => dispatch => (
    SessionAPI.logout().then( () => {dispatch(clearPost()); dispatch(logoutCurrentUser())})
);