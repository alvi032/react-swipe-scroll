import React, {Component} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from "./Slide"
import slideData from './slideData'

function Home(props) {
    const homeSlider = slideData.map((slide) => <Slide key={slide.id}
                                                                heading={slide.heading}
                                                                description={slide.description}
                                                                image= {slide.image}
                                                               />)
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <div>
            <Slider {...settings}>
                {homeSlider}
            </Slider>
        </div>
    );
}

export default Home;