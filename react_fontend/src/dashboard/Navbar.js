import React from "react";
import App from "./App";
import { Link } from 'react-router-dom';

const Navbar=()=>{
    return(
        <div>
            <ul className="navbar-ul">
                <li><Link to="/"> Home</Link> </li>
                <li><Link to="/"> About</Link> </li>
                <li><Link to="/"> Portfolios</Link> </li>
                <li><Link to="/"> Contact</Link> </li>
            </ul>
        </div>
    )
}

export default Navbar;