import fetch from 'isomorphic-fetch';

const saveAllLocations = (locations) => {
  return {
    type: 'SAVE_LOCATIONS',
    data: locations
  };
};

const saveCoordinates = (coordinates) => {
  return {
    type: 'SAVE_COORDINATES',
    data: coordinates
  };
};

const setCurrentCoordinates = (coordinates) => {
  return {
    type: 'SET_CURRENT_COORDINATES',
    data: coordinates
  };
};

const fetchLocations = () => {
  return (dispatch) => {
    return fetch('/locations', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
    .then(locations => locations.json())
    .then(json => dispatch(saveAllLocations(json)))
  };
};

const saveNewLocation = (location) => {
  return (dispatch) => {
    return fetch('/locations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(location),
    })
    .then(response => response.json())
    .then(() => dispatch(fetchLocations()))
  };
};

export { fetchLocations, saveNewLocation, saveCoordinates, setCurrentCoordinates };