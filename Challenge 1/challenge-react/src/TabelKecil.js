import React, { Component } from 'react';
import './assets/css/main-news.css';
// import './assets/js/bootstrap.min.js';
import './assets/css/bootstrap.min.css';
import logo from './assets/logo/logo-alterra-academy@2x.png';
import foto from "./assets/ico/ico-gallery@2x.png"

import plain from "./assets/logo/logo-alterra-academy-plain@2x.png";
import facebook from "./assets/ico/ico-facebook@2x.png";
import twitter from "./assets/ico/ico-twitter@2x.png";
import instagram from "./assets/ico/ico-instagram@2x.png";

class ListNews extends Component {
  render() {
    return (
    <body>
        <header>
            <img class="logo-head" src={logo}/>
            <nav>
                <ul>
                    <a href="about.html"><li class="listnav">ABOUT</li></a>
                    <a href="gallery.html" id="nav-color"><li class="listnav">GALLERY</li></a>
                    <a href="contact.html"><li class="listnav">CONTACT</li></a>
                    <a href="ListNews.html" id="nav-color"><li class="listnav">News</li></a>
                </ul>
            </nav>
        </header>
        <img class="img-fluid icon-gallery" src={foto}/>
        <span class="gallery">NEWS</span>
        <hr/>
        <div class="container">
            <div class = "row jaraksearch">
                <form action="">
                    <input type="name" class = "inputformnama" placeholder="Search something ...    "/>
                </form>
            </div>
            <div class = "row">
                <div class="col-md-4">
                    <table>
                        <tr>
                            <td class="beritadisplay">Judul</td>
                        </tr>
                        <tr>
                            <td class="nomorurutberita">#1</td>
                        </tr>
                        <tr>
                            <td class="beritadisplay">Cerita tentang kebahagiaan dari dia</td>
                        </tr>
                        <tr>
                            <td class="nomorurutberita">#2</td>
                        </tr>
                        <tr>
                            <td class="beritadisplay">Sudah beberapa tahun aku bersama dia</td>
                        </tr>
                        <tr>
                            <td class="nomorurutberita">#3</td>
                        </tr>
                        <tr>
                            <td class="beritadisplay">Tapi memang kuakui, aku tidaklah sempurna</td>
                        </tr>
                        <tr>
                            <td class="nomorurutberita">#4</td>
                        </tr>
                        <tr>
                            <td class="beritadisplay">Lelaki manapun, tak ada yang terlahir sempurna</td>
                        </tr>
                        <tr>
                            <td class="nomorurutberita">#5</td>
                        </tr>
                        <tr>
                            <td class="beritadisplay">Mereka akan sempurna, jika mereka mampu mengenal lebih dalam satu dengan yang lain</td>
                        </tr>
                    </table>
                </div>
                <div class="col-md-8">
                    <div class="row">
                        <table style={{width :'100%'}}>
                            <tr>
                                <td class="displaygambar">#1</td>
                            </tr>
                            <tr>
                                <td class="displayjudul">#1</td>
                            </tr>
                            <tr>
                                <td class="displayberita">#1</td>
                            </tr>
                        </table>
                    </div>
                    
                </div>
                
            </div>
        </div>
        <footer>
        <div class="container">
            <div class="row">
                <div class="col-md-6 marginfoot">
                    <img class="logo-foot" src="assets/logo/logo-alterra-academy-plain@2x.png"/><br/>
                    <span class="copyright">©Copyright Alterra Group 2019</span>
                </div>
                <div class="col-md-6 rowfoot">
                        <span id="follow">Follow Us On</span><br/>
                    <ul class="ulul">
                        <li class="medsos">
                            <img class="imgfoot" src={facebook}/><span class="medword">Facebook</span>
                        </li>
                        <li class="medsos">
                            <img class="imgfoot" src={twitter}/><span class="medword">Twitter</span><br/>
                        </li>
                        <li class="medsos">
                            <img class="imgfoot" src={instagram}/><span class="medword">Instagram</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </footer>
    </body>
    );
  }
}
export default ListNews;