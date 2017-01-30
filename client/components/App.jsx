import React from 'react';
import Navbar from './nav.jsx';
import Carousel from './carousel.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div >
        <Navbar />
        <Carousel />
      </div>
    );
  }
}

module.exports = App;