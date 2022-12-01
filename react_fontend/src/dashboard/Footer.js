import React from "react";
import { Link } from 'react-router-dom';

const Footer=()=>{
    return(
        <div className="footer-area">
            <ul className="footernav-ul">
                <li><Link to="/"> Location</Link> </li>
                <li><Link to="/"> About</Link> </li>
                <li><Link to="/"> Contact</Link> </li>
            </ul>
        </div>
    )
}

export default Footer;