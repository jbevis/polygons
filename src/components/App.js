import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PolygonMap from '../components/PolygonMap';
import InputContainer from '../containers/InputContainer';
import '../styles/App.css';

class App extends Component {

  componentDidMount() {
    this.getLocations();
  }

  getLocations() {
    this.props.fetchLocations();
  }
  
  render() {
    const { coordinates, currentCoordinates } = this.props;

    return (
      <section className='App'>
        <h1 className='header'>Polygon Map</h1>
        <InputContainer />
        <PolygonMap coordinates={ coordinates }
                    currentCoordinates={ currentCoordinates } />
      </section>
    );
  };
};

App.propTypes = {
  fetchLocations: PropTypes.func.isRequired,
  locations: PropTypes.arrayOf(PropTypes.object).isRequired,
  coordinates: PropTypes.arrayOf(PropTypes.array).isRequired,
  currentCoordinates: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default App;
