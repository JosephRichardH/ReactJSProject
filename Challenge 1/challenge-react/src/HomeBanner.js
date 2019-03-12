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

class HomeBanner extends Component {
  render() {
    return (
    <div class="banner">
        <img class="profile" src={jokowi}/>
        <p class="nama">Joko Widodo</p>  
        <p class="location">Jakarta, Indonesia</p>
        <p class="job">Presiden Indonesia</p>
        <button type="button" class="cv">Download CV</button>
    </div>
    );
  }
}
export default HomeBanner;