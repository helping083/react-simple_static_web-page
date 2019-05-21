import React from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';
import Header from './components/header_footer/header';
import Featured from './components/featured/index';
import VenueInfo from './components/venueInfo/index';
import Highlights from './components/highlights';
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/header_footer/footer';


function App() {
  return (
    <div className="App">
        <Header/>
        <Element name="featured">
          <Featured/>
        </Element> 

        <Element name="venue">
          <VenueInfo/>
        </Element>

        <Element name='highlight'>
          <Highlights/>
        </Element>

        <Element name="pricing">
          <Pricing/>
        </Element>

        <Element name="location">
          <Location/>
        </Element>
        
       
          <Footer/>
        
        
    </div>
  );
}

export default App;
