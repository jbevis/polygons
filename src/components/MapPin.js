import React from 'react';
import PropTypes from 'prop-types';
import { Marker, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import pin from '../images/pin.svg';

const MapPin = ({ location, name, saveCoordinates }) => {
  const mapPin = L.icon({
    iconUrl: pin,
    iconSize: [15, 15]
  });

  return (
    <section className='pin-container'>
      <Marker onClick={ () => saveCoordinates(location) }
              position={ location }
              icon={ mapPin }
      >
        <Tooltip
          sticky
          interactive
        >
          <div>
            <h4>{ name }</h4>
          </div>
        </Tooltip>
      </Marker>
    </section>
  );
};

MapPin.propTypes = {
  location: PropTypes.arrayOf(PropTypes.number).isRequired,
  name: PropTypes.string.isRequired,
  saveCoordinates: PropTypes.func.isRequired
};

export default MapPin;