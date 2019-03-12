import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home'
import Gallery from './Gallery'
import Contact from './Contact'

import HomeHeader from './Header'
import HomeBanner from './HomeBanner'
import HomeTable from './HomeTable'
import HomeFooter from './Footer'

import GalleryHeader from './GalleryHeader'
import GalleryContent from './GalleryContent'
import GalleryFooter from './GalleryFooter'

import ContactKiri from './ContactKiri'
import ContactKanan from './ContactKanan'
import ListNews from './ListNews';
import CobaBaru from './cobabaru';


class App extends Component {
  render() {
    return (
//        <div className="App">
//        <Home /> 
//        <Gallery /> 
//        <Contact /> 
//        </div>
//  <body>
//      <Header />
//      <HomeBanner />
//      <HomeTable />
//      <Footer />
//  </body>
//
//  <body>
//  <Header />
//  <GalleryContent />
//  <Footer />
//  </body>
//
//  <body>
//  <div class="row">
//  <ContactKiri />
//  <ContactKanan />
//  </div>
//  </body>

  <ListNews />
//    <CobaBaru />
    );
  }
}

export default App;