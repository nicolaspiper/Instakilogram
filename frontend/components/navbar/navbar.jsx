import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    
    
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="navbar">
                <div className="navbarContent">
                    <div className="homeLinks">
                        <div className="leftyLinks">
                            <img src="/assets/instagramera.png" className="iconImg" alt="instakilogram home"/>
                            <div id="vertDivider"></div>
                            <div className="appName">
                               <p>Instakilogram</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="centerDiv">empty content</div> */}
                    <div className="rightDiv">
                        <img src="/assets/Explorerericon.png" className="iconImg" alt="explore"/>
                        <img src="/assets/Heartagram.png" className="iconImg" alt="heart"/>
                        <img src="/assets/Profile.png" className="iconImg" alt="profile"/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Navbar