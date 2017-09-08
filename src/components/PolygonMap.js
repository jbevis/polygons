import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map, TileLayer, ZoomControl, Polygon } from 'react-leaflet';
import MapMarkersContainer from '../containers/MapMarkersContainer';
// import { mapKey } from '../../db/token';

class PolygonMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: [39.750809, -104.996810],
      zoom: 4
    };
  }

  render() {
    const { center, zoom } = this.state;
    const { coordinates, currentCoordinates } = this.props;

    return (
      <section id="map-container">
        <Map animate={ true }
             useToFly={ true }
             className='map'
             zoomControl={ false }
             center={ currentCoordinates.length ? currentCoordinates: center }
             zoom={ currentCoordinates.length ? 5 : zoom }
             maxBounds={ [[180, -180], [-180, 180]] }
        >
          <TileLayer url='https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiamJldmlzIiwiYSI6ImNqN2F1NTk0ZjBqdTMycW56ajUzd3htcXgifQ.WOgRawrPYgDpHuF-C5gbPA'
                     attribution='Map data &copy; <a href="https://mapbox.com"> Mapbox</a> contributors'
                     maxZoom={ 10 }
                     minZoom={ 2 }
          />
          <ZoomControl position='bottom-right' />
          <MapMarkersContainer />
          <Polygon positions={ coordinates } />
        </Map>
      </section>
    );
  }
}

PolygonMap.propTypes = {
  coordinates: PropTypes.arrayOf(PropTypes.array).isRequired,
  currentCoordinates: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default PolygonMap;