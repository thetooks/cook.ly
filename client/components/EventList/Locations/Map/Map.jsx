import React from 'react';
import { GoogleMapsApiKey } from "./config.js"
import { ReactScriptLoaderMixin } from 'react-script-loader';
import styles from "./Map.css";
 
 var Map = React.createClass({
  mixins: [ ReactScriptLoaderMixin ],

  getScriptURL: function() {
    return '';//`https://maps.googleapis.com/maps/api/js?key=${GoogleMapsApiKey}`;
  },

  getInitialState: function() {
    return {
      mapLoading: true,
      mapLoadingError: false,
    }
  },

  onScriptLoaded: function() {
    this.setState({ mapLoading: false, mapLoadingError: false });

    this.initMap();
  },

  onScriptError: function() {
    this.setState({ mapLoading: false, mapLoadingError: true });
  },

  initMap: function() {
    var uluru = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  },

  render: function() {
    if (this.state.mapLoading) {
      return (
        <div className={styles.map}>Loading...</div>
      );
    } else if (this.state.mapLoadingError) {
      return (
        <div className={styles.map}>Loading error</div>
      );
    } else {
      return (
        <div id="map" className={styles.map}>
          
        </div>
      );
    }
  }
});

module.exports = Map;