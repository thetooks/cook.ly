import React from 'react';
import Carousel from 'react-bootstrap/lib/Carousel';

class carouselInstance extends React.Component {
  
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src="./assets/diningTable2.jpg"/>
          <Carousel.Caption>
            <h1>Welcome to Cook.ly</h1>
            <h4>Connecting communities through food.</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src="./assets/diningTable1.jpeg"/>
          <Carousel.Caption>
            <h1>As a Host</h1>
            <h4>Share your cooking talent with the world!</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src="./assets/diningTable.jpeg"/>
          <Carousel.Caption>
            <h1>As a Guest</h1>
            <h4>Enjoy a unique dining experience with friends</h4>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}


module.exports = carouselInstance;