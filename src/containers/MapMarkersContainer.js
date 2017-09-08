import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MapMarkers from '../components/MapMarkers';
import { saveCoordinates } from '../actions/index';

const mapStateToProps = (state) => {
  return { locations: state.Locations.data };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ saveCoordinates }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MapMarkers);