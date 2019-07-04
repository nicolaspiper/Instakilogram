import * as SessionAPI from './../utils/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT = "LOGOUT";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveCurrentUser = (currentUser) =>({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const receiveErrors = (error) => ({
    type: RECEIVE_SESSION_ERRORS,
    error
});

export const logoutCurrentUser = () => ({
    type: LOGOUT
});

export const signup = (user) => dispatch => (
    SessionAPI.signup(user).then(
        user => dispatch(receiveCurrentUser(user)), 
        error => dispatch(receiveErrors(error.responseJSON))
        )
);

export const login = (user) => dispatch => (
    SessionAPI.login(user).then(
        user => dispatch(receiveCurrentUser(user)),
        error => dispatch(receiveErrors(error.responseJSON))
    )
);

export const logout = () => dispatch => (
    SessionAPI.logout().then( user => dispatch(logoutCurrentUser()))
);