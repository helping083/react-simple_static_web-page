import React from 'react';
import './resources/styles.css';
import Header from './components/header_footer/header';
import Featured from './components/featured/index';
import VenueInfo from './components/venueInfo/index';
import Highlights from './components/highlights';

function App() {
  return (
    <div className="App">
        <Header/>
        <Featured/>
        <VenueInfo/>
        <Highlights/>
    </div>
  );
}

export default App;
