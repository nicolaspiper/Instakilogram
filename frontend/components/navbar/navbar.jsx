import React from 'react';
// import instagramera from '../../../app/assets/images/instagramera'
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
                            <img src="/assets/instagramera.png" className="iconImg" alt=""/>
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