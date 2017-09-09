import React from 'react';
import PropTypes from 'prop-types';
import MapPin from './MapPin';

const MapMarkers = ({ locations, saveCoordinates }) => {
  const markerArray = locations.map((marker, i) => {
    return (
      <MapPin key={ i }
              location={ [+marker.lat, +marker.long] }
              name={ marker.name }
              saveCoordinates={ saveCoordinates }
      />
    );
  });

  return (
    <section className="paths-container">
      { markerArray }
    </section>
  );
};

MapMarkers.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.object).isRequired,
  saveCoordinates: PropTypes.func.isRequired
};

export default MapMarkers;