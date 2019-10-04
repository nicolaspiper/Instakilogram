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
                    <div className="homelink">
                        <img src="assets/images/Instagramera.png" alt="Home"/>
                    </div>
                    <div className="centerDiv"></div>
                    <div className=""></div>
                </div>
            </div>
        )
    }
}
export default Navbar