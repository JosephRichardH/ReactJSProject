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

import axios from "axios";
const apiKey="7f484ed4b9c942d9b917851f4bea7545";
const baseUrl = "https://newsapi.org/v2";
const urlHeadLine = baseUrl + "/top-headlines?country=id&" + "apikey=" + apiKey;
const urlHeadLine1 = baseUrl + "/everything?q=Trade War&" + "apikey=" + apiKey;

const az = null;
const ITEM_PER_PAGE = 5
const SHOW_ITEM_PAGE = 7

class ListNews extends Component {

    constructor (props){
        super(props);
        this.state = {
            listNews:[],
            listNews1:[],
            username: "",
            isLogin: false,
        }
        // this.top5 = this.top5.bind(this);
    }

    componentDidMount = () => { 
    console.log(urlHeadLine)
    const self = this;
    axios
        .get(urlHeadLine)
        .then(function(response){
            self.setState({listNews : response.data.articles});
            console.log(response.data);
        })
        .catch(function(error){
            console.log(error);
        })
    axios        
        .get(urlHeadLine1)
        .then(function(response){
            self.setState({listNews1 : response.data.articles});
            console.log(response.data);
        })
        .catch(function(error){
            console.log(error);
        });
    }
    
    get top5(){
        const {listNews, username, isLogin}= this.state
        const data_potongan = listNews.slice(0,ITEM_PER_PAGE)
        const stories= data_potongan
    
        const tabel=stories.map((story, urut) =>
        <div>
        <tr style={{width :'100%'}}>
            <td class="nomorurutberita" >{'#' + (urut+1)} < a href={story.url}>{story.title}</a></td>
        </tr>
        <tr style={{width :'100%'}}>
            <td class="beritadisplay">
            <br/>
            {story.description}
            </td>
        </tr>
        </div>
        );
        return tabel
    }

    get bigtop5(){
        const {listNews1, username, isLogin}= this.state
        const data_potongan = listNews1.slice(0,SHOW_ITEM_PAGE)
        const stories= data_potongan
    
        const tabel=stories.map((story, urut) =>
        <div>
            
            <tr>
                <td class="displaygambar"><img src={story.urlToImage}/></td>
            </tr>
            <tr>
                <td class="displayjudul">{story.title}</td>
            </tr>
            <tr>
                <td class="displayberita">{story.content}</td>
            </tr>
        </div>
        );
        return tabel;
    }

    render() {
    return (
    <body>
        <header>
            <img class="logo-head" src={logo}/>
            <nav>
                <ul>
                    <a href="about.html"><li class="listnav">ABOUT</li></a>
                    <a href="gallery.html"><li class="listnav">GALLERY</li></a>
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
        </div>
        <div class = "container contentcontent">
        <div class = "row">
            <div class="col-md-4">
                <table style={{width :'100%'}}>
                <tr>
                    <td class="beritadisplay">Judul</td>
                </tr>
                {this.top5}
                </table>
            </div>
            <div class="col-md-8">
                <div class="row">
                    <table style={{width :'100%'}}>
                    {this.bigtop5}
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