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

class HomeTable extends Component {
  render() {
    return (
    <div clas="container container-aboutme">
        <div class="row">
            <div class="col-6 isiaboutme">
                <span class="aboutme">About Me</span><br/>
                <p class="paragraf"> Hai! My name's Joko Widodo, known as President of <span class="a">Indonesia</span>.</p>
                <p class="paragraf">My Duty as President are mainly to ensures country stability and commute any spoken ideas from Indonesia.</p>
                <p class="paragraf">Hopefully, with my current position, I may serve Indonesia for good aim and purpose, and to have better of it.</p>
            </div>
            <div class="col-6 titletable">
                <span class="aboutme">Information</span><br/>
                <table class="tableawal">
                    <tr>
                        <td class="barisputihkecil"> Age</td>
                        <td class="barisputihbesar"> :57</td>
                    </tr>
                    <tr>
                        <td class="barisabukecil"> Instagram</td>
                        <td class="barisabubesar"> : @jokowi</td>
                    </tr>
                    <tr>
                        <td class="barisputihkecil"> Alamat</td>
                        <td class="barisputihbesar"> : Istana Negara, Jakarta</td>
                    </tr>
                </table>                    
            </div>
        </div>      
    </div>
    );
  }
}
export default HomeTable;