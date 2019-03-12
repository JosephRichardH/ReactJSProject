import React from 'react';
import { Link } from "react-router-dom"
import logo from "../assets/logo/logo-alterra-academy@2x.png"

const logoWrapper = {
    display : "block",
    width : "100px",
    float: "left",
    textAlign : "Center"
};

const Navigation = props => {
    return (
        <header>
            <img class="logo-head" src={logo}/>
            <nav id="topnav">
                <ul>
                <li className = "listnav"><Link to ="/">Home</Link></li>
                <li className = "listnav"><Link to ="/signup">Signup</Link></li>
                <li className = "listnav"><Link to ="/signin">SignIn</Link></li>
                <li className = "listnav"><Link to ="/profile">Profile</Link></li>
                <li className = "listnav"><Link to ="/" onClick={() => this.props.postSignOut()}>Signout</Link></li>
                <li className = "listnav"><Link to ="/news">News</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navigation;