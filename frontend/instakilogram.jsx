import React from 'react';
import ReactDOM from 'react-dom';
import {login, signup, logout} from './utils/session_api_util';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    
    const root = document.getElementById('root');
    ReactDOM.render(<h1>REACT IS WORKING!</h1>, root)
});

window.login = login;
window.signup = signup;
window.logout = logout;