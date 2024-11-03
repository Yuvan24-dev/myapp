import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { TiArrowRight } from "react-icons/ti";
import { TiArrowLeft } from "react-icons/ti";
import './slider.css';
import myImage from './img/slider-img.png'; // Main image (bowl)
import rightImage from './img/slider-bg2.png'; // Right side image
import backgroundImage from './img/slider-bg1.png'; // Background image

const SliderSection = () => {
    const [index, setIndex] = useState(0);

    const slides = [
        {
            title: "Chocolate",
            subtitle: "Yummy",
            imgSrc: myImage,
        },
        {
            title: "Chocolate",
            subtitle: "Delicious",
            imgSrc: myImage,
        },
        {
            title: "Chocolate",
            subtitle: "Smooth",
            imgSrc: myImage,
        },
    ];

    const handlePrev = () => {
        setIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <section className="slider_section">
            <div className="overlay-images">
                <img className="right-overlay-img" src={rightImage} alt="Right Side Decoration" />
            </div>
            <Carousel activeIndex={index} onSelect={setIndex} controls={false} indicators={false}>
                {slides.map((slide, idx) => (
                    <Carousel.Item key={idx}>
                        <div className="carousel-slide-content container">
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <div className="detail_box">
                                        <h1>
                                            {slide.title} <br />
                                            <span>{slide.subtitle}</span>
                                        </h1>
                                        <a href="#!" className="read-more-btn">
                                            <span>Read More</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-6 slider-img-container">
                                    <div className="img-box">
                                        <img className="main-slider-img" src={slide.imgSrc} alt={slide.title} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
            <div className="carousel-buttons">
                <button className="carousel-btn" onClick={handlePrev}>
                    <TiArrowLeft style={{ color: 'brown' }} />
                </button>
                <button className="carousel-btn" onClick={handleNext}>
                <TiArrowRight style={{ color: 'brown' }} /> 
                </button>
            </div>
        </section>
    );
};

export default SliderSection;
