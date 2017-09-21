import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  constructor() {
    super();
    this.state = {
      error: ''
    };
  }

  submitInfo(data) {
    this.validateInput(data);
  };

  validateInput(data) {
    const { lat, long } = data;
    const { saveNewLocation, setCurrentCoordinates } = this.props;

    if (data.name && this.checkLat(lat) && this.checkLong(long)) {
      saveNewLocation(data);
      setCurrentCoordinates([parseFloat(lat), parseFloat(long)]);
      this.clearFields();
    } else {
      this.setState({ error: 'Please enter a valid name and latitude / longitude coordinates.' });
    }
  };

  checkLat(lat) {
    return (lat.length >= 7 && parseFloat(lat) >= -90 && parseFloat(lat) <= 90);
  };

  checkLong(long) {
    return (long.length >= 7 && parseFloat(long) >= -180 && parseFloat(long) <= 180);
  };

  clearFields() {
    this.name.value = '';
    this.lat.value = '';
    this.long.value = '';
  };

  render() {
    const { error } = this.state;

    return (
      <div className='form'>
        <label className='form-label'>
          Placename:
          <input type='text'
                 name='name'
                 placeholder='Enter placename'
                 ref={(input) => { this.name = input }}
          />
        </label>
        <label className='form-label'>
          Latitude:
          <input type='text'
                 name='latitude'
                 placeholder='Enter latitude'
                 ref={(input) => { this.lat = input }} 
          />
        </label>
        <label className='form-label'>
          Longitude:
          <input type='text'
                 name='longitude'
                 placeholder='Enter longitude'
                 ref={(input) => { this.long = input }} 
          />
        </label>
        <button type='submit'
                onClick={() => this.submitInfo({
                  name: this.name.value,
                  lat: this.lat.value,
                  long: this.long.value
                })}>
          Submit
        </button>
        { error && <p className="error">{ error }</p>}
      </div>
    );
  }
}

Input.propTypes = {
  saveNewLocation: PropTypes.func.isRequired,
  setCurrentCoordinates: PropTypes.func.isRequired
};

export default Input;