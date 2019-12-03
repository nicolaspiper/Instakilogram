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
                            <Link to="/" id="homelink" ><div className="spriteDiv" id="home"></div></Link>
                            {/* <img src="/assets/Instagramera.png" className="iconImg" alt="instakilogram home" /> */}
                            <div id="vertDivider"></div>
                            <div className="appName">
                                <Link to="/"><p>Instakilogram</p></Link>
                            </div>
                        </div>
                    </div>
                    <div className="rightDiv">
                        <div className="spriteDiv" id="add" onClick={this.props.newPost}></div>
                        <div className="spriteDiv" id="likes"></div>
                        <div className="spriteDiv" id="profile" onClick={this.props.openProfile}></div>
                        {/* <img src="/assets/Explorerericon.png" className="iconImg" alt="explore"/>
                        <img src="/assets/Heartagram.png" className="iconImg" alt="heart"/>
                        <img src="/assets/Profile.png" className="iconImg" alt="profile" 
                            onClick={this.props.openProfile}
                            /> */}
                    </div>
                </div>
            </div>
        )
    }
}
export default Navbar