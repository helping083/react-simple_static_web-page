import React from 'react';
import Slider from "react-slick";
import slide_one from '../../resources/images/slide_one.jpg';
import slide_two from '../../resources/images/slide_two.jpg';
import slide_three from '../../resources/images/slide_three.jpg';

const carouse = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        speed: 800
    }
    //todo - change on dynamic instead of static
    return (
        <div
            className="carousel_wrapper"
            style={{
                height: `${window.innerHeight}px`,
                overflow:'hidden'
            }}
        >
          <Slider {...settings}>
            <div>
              <div 
                className="carrousel_image"
                style={{
                    height: `${window.innerHeight}px`,
                    background: `url(${slide_one})`
                }}
              ></div>    
            </div>
            <div>
              <div 
                className="carrousel_image"
                style={{
                    height: `${window.innerHeight}px`,
                    background: `url(${slide_two})`
                }}
              ></div> 
            </div>
            <div>
              <div 
                className="carrousel_image"
                style={{
                    height: `${window.innerHeight}px`,
                    background: `url(${slide_three})`
                }}
              ></div>
            </div>
          </Slider>    
        </div>
    );
};

export default carouse;