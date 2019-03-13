import React, { Component } from 'react';
import './assets/css/main-contact.css';
// import './assets/js/bootstrap.min.js';
import './assets/css/bootstrap.min.css';
import plain from "./assets/logo/logo-alterra-academy-plain@2x.png";
import kiri from "./assets/img/side-view.jpg"

class ContactKiri extends Component {
  render() {
    return (
        <div class="col-sm-6 styletambahan1">
            <img src={kiri} class = "sebelahkiri"/>
            <div class="overlay">
                <img src={plain} class="alterrakecil"/>
            </div>
        </div>
    );
  }
}
export default ContactKiri;