import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchLocations } from '../actions/index';
import App from '../components/App';
import '../styles/App.css';

const mapStateToProps = (state) => {
	return {
		locations: state.Locations.data,
		coordinates: state.Coordinates,
		currentCoordinates: state.CurrentCoordinates
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ fetchLocations }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);