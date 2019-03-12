import React, { Component } from 'react';
import './assets/css/main-gallery.css';
// import './assets/js/bootstrap.min.js';
import './assets/css/bootstrap.min.css';
import logo from './assets/logo/logo-alterra-academy@2x.png';
import icongallery from "./assets/ico/ico-gallery@2x.png";

import gambar1 from "./assets/img/exp-gallery/jake-allison-1322894-unsplash.jpg";
import gambar2 from "./assets/img/exp-gallery/jay-lee-1323073-unsplash.jpg";
import gambar3 from "./assets/img/exp-gallery/nic-yee-1321843-unsplash.jpg";
import gambar4 from "./assets/img/exp-gallery/nordwood-themes-1319985-unsplash.jpg";
import gambar5 from "./assets/img/exp-gallery/phil-desforges-1322844-unsplash.jpg";
import gambar6 from "./assets/img/exp-gallery/ryan-1321510-unsplash.jpg";


import plain from "./assets/logo/logo-alterra-academy-plain@2x.png";
import facebook from "./assets/ico/ico-facebook@2x.png";
import twitter from "./assets/ico/ico-twitter@2x.png";
import instagram from "./assets/ico/ico-instagram@2x.png";

class GalleryContent extends Component {
  render() {
    return (
    <content>
        <img class="img-fluid icon-gallery" src={icongallery}/>
        <span class="gallery">GALLERY</span>
        <hr/>
        <div class="container">
            <div class="row row-gallery">
                <div class="col-md-4">
                    <img class="img-fluid img-gallery" src={gambar1}/>
                </div>
                <div class="col-md-4">
                    <img class="img-fluid img-gallery" src={gambar2}/>
                </div>
                <div class="col-md-4">
                    <img class="img-fluid img-gallery" src={gambar3}/>
                </div>
            </div>
            <div class="row row-gallery">
                <div class="col-md-4">
                    <img class="img-fluid img-gallery" src={gambar4}/>
                </div>
                <div class="col-md-4">
                    <img class="img-fluid img-gallery" src={gambar5}/>
                </div>
                <div class="col-md-4">
                    <img class="img-fluid img-gallery" src={gambar6}/>
                </div>
            </div>
        </div>
        </content>
    );
  }
}
export default GalleryContent;