import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map, TileLayer, ZoomControl, Polygon } from 'react-leaflet';
import MapMarkersContainer from '../containers/MapMarkersContainer';
import { mapKey } from '../token';

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
    const mapTile = `https://api.mapbox.com/styles/v1/jbevis/cj3nsstkt002a2smjv4p84sjc/tiles/256/{z}/{x}/{y}?access_token=${ mapKey }`;

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
          <TileLayer url={ mapTile }
                     attribution='Map data &copy; <a href="https://mapbox.com"> Mapbox</a> contributors'
                     maxZoom={ 10 }
                     minZoom={ 2 }
          />
          <ZoomControl position='bottomright' />
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