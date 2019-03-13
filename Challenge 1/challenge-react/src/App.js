import React, { Component } from 'react';
import logo from './logo.svg';
import './assets/css/App.css';
import Home from './Pages/Home'
import Gallery from './Gallery'
import Contact from './Pages/Contact'

import HomeHeader from './Header'
import HomeBanner from './HomeBanner'
import HomeTable from './HomeTable'
import HomeFooter from './Pages/Footer'

import GalleryHeader from './GalleryHeader'
import GalleryContent from './GalleryContent'
import GalleryFooter from './GalleryFooter'

import ContactKiri from './Pages/ContactKiri'
import ContactKanan from './Pages/ContactKanan'
import ListNews from './Pages/ListNews';
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