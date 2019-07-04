import React from 'react';
import GreetingContainer from "./greeting_container"
import {Link} from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <Link to="/login">Login</Link>
            <br/>
            or 
            <br/>
            <Link to="/signup">Sign Up!</Link>
        </nav>
    );
    const personalGreeting = () => (
        <div className="greeting-box">
            <h2 className="greeting-text"> Hi, {currentUser.username}!</h2>
            <button className="logout-button" onClick={logout}>Logout</button>
        </div>
    );
    return currentUser ? personalGreeting() : sessionLinks();
}

export default Greeting;
