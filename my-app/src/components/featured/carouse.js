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
  const slides = [slide_one, slide_two, slide_three].map((item, index) => {
    return (
      <div key={item}>
        <div
          key={item+index}
          className="carrousel_image"
          style={{
            height: `${window.innerHeight}px`,
            background: `url(${index===0 ? slide_one: index===1 ? slide_two:  slide_three})`
          }}
        ></div>
      </div>
    );
  });
  return (
    <div
      className="carousel_wrapper"
      style={{
        height: `${window.innerHeight}px`,
        overflow: 'hidden'
      }}
    >
      <Slider {...settings}>
        {slides}
      </Slider>
    </div>
  );
};

export default carouse;