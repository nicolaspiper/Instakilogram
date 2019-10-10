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
                            <Link to="/" ><img src="/assets/instagramera.png" className="iconImg" alt="instakilogram home" /></Link>
                            <div id="vertDivider"></div>
                            <div className="appName">
                                <Link to="/"><p>Instakilogram</p></Link>
                            </div>
                        </div>
                    </div>
                    <div className="rightDiv">
                        <img src="/assets/Explorerericon.png" className="iconImg" alt="explore"/>
                        <img src="/assets/Heartagram.png" className="iconImg" alt="heart"/>
                        <img src="/assets/Profile.png" className="iconImg" alt="profile" 
                            onClick={this.props.openProfile}
                            />
                    </div>
                </div>
            </div>
        )
    }
}
export default Navbar