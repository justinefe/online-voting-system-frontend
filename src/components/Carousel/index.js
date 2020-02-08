import React, { useState } from "react";
// import { Carousel } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';


const ControlledCarousel = () => {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel className='carous'activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className='carus'>
          <img
            className="d-block h-40 w-100"
            src="../../assets/png/car8.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='carus'>
          <img
            className="d-block h-40 w-100"
            src="../../assets/png/dumy.jpg"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='carus'>
          <img
            className="d-block h-40 w-100"
            src="../../assets/png/car8.jpg"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default ControlledCarousel;