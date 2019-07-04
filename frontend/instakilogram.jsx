import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {login} from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
    // if (window.currentUser) {
    //     const preloadedState = {
    //         session: { id: window.currentUser.id },
    //         entities: {
    //             users: { [window.currentUser.id]: window.currentUser }
    //         }
    //     };
    //     store = configureStore(preloadedState);
    //     delete window.currentUser;
    // } else {
    //     store = configureStore();
    // }
    const store = configureStore();
    window.login = login;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root)
    // let store = configureStore();
    // window.getState = store.getState;
    // window.dispatch = store.dispatch;
});
