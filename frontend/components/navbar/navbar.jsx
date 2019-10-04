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
                    <div className="homelinks">
                        <div className="leftyLinks">
                            <img src="/app/assets/images/Instagramera.png" className="iconImg" alt=""/>
                            <div id="vertDivider"></div>
                            <div>Instakilogram</div>
                        </div>
                    </div>
                    <div className="centerDiv"></div>
                    <div className="rightDiv"></div>
                </div>
            </div>
        )
    }
}
export default Navbar