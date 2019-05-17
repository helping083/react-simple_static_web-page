import React from 'react';
import Carousel from './carouse';
import TimeUntil from './timeUntill';


const Featured = () => {
    return (
        <div style={{position: 'relative'}}>
          <Carousel/>
          <div className="artist_name">
            <div className="wrapper">
              Ariana Grande
            </div>
          </div>
          <TimeUntil/>
        </div>
    );
};

export default Featured;