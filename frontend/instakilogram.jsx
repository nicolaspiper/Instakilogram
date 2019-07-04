import React from 'react';
import ReactDOM from 'react-dom';
import {login, signup, logout} from './utils/session_api_util';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    ReactDOM.render(<h1>REACT IS WORKING!</h1>, root)
})

window.login = login;
window.signup = signup;
window.logout = logout;