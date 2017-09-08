import { combineReducers } from 'redux';
import Locations from './LocationsReducer';
import Coordinates from './CoordinatesReducer';
import CurrentCoordinates from './CurrentCoordinatesReducer';

const RootReducer = combineReducers({
	Locations,
	Coordinates,
	CurrentCoordinates
});

export default RootReducer;