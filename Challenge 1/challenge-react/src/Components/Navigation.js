import React from 'react';
import { Link, withRouter } from "react-router-dom"
import logo from "../assets/logo/logo-alterra-academy@2x.png"
import { connect } from "unistore/react";
import { actions } from "../Store";

const Navigation = props => {
    return (
        <header>
            <img className="logo-head" src={logo}/>
            <nav id="topnav">
                <ul>
                <li className = "listnav"><Link to ="/">Home</Link></li>
                <li className = "listnav"><Link to ="/signup">Signup</Link></li>
                <li className = "listnav"><Link to ="/signin">SignIn</Link></li>
                <li className = "listnav"><Link to ="/profile">Profile</Link></li>
                <li className = "listnav"><Link to ="/" onClick={() => props.postSignOut()}>Signout</Link></li>
                <li className = "listnav"><Link to ="/news">News</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default connect("islogin,username,password",actions)(withRouter(Navigation));