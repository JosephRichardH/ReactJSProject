import React, { Component } from 'react';
import './assets/css/main-about.css';
// import './assets/js/bootstrap.min.js';
import './assets/css/bootstrap.min.css';
import logo from './assets/logo/logo-alterra-academy@2x.png';
import jokowi from "./assets/img/jokowi.jpeg";
import plain from "./assets/logo/logo-alterra-academy-plain@2x.png";
import facebook from "./assets/ico/ico-facebook@2x.png";
import twitter from "./assets/ico/ico-twitter@2x.png";
import instagram from "./assets/ico/ico-instagram@2x.png";

class HomeHeader extends Component {
  render() {
    return (
    <header>
        <img class="logo-head" src={logo}/>
        <nav>
            <ul>
                <a href="about.html" id="nav-color"><li class="listnav">ABOUT</li></a>
                <a href="gallery.html"><li class="listnav">GALLERY</li></a>
                <a href="contact.html"><li class="listnav">CONTACT</li></a>
                <a href="ListNews.html"><li class="listnav">News</li></a>                    
            </ul>
        </nav>
    </header>
    );
  }
}
export default HomeHeader;