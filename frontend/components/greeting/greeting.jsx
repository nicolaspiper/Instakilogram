import React from 'react';
import GreetingContainer from "./greeting_container"
import {Link} from 'react-router-dom';
import SignUpContainer from "./../session_form/sign_up_form_container";

const Greeting = ({currentUser, logout}) => {
    const showSplash = () => (
        <main>
            <div className="main-splash-div">
                <div>
                    <div className="left-div">
                        <img src="/assets/indefinitelyborrowedcats.png" className="splash-img" alt="indefinitelyborrowedcats"/>
                    </div>
                    <div className="right-div">
                        <SignUpContainer/>
                    </div>
                </div>
            </div>
            <footer className="bottom-links">

            </footer>
        </main>
    );
    const Posts = () => (
        <div className="greeting-box">
            <div className="center-box">
                <h2 className="greeting-text"> Hi, {currentUser.username}!</h2>
                <button className="logout-button" onClick={logout}>Logout</button>
                <p>Posts coming soon...</p>
            </div>

        </div>
    );
    return currentUser ? Posts() : showSplash();
}

export default Greeting;
