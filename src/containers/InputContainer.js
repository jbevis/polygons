import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Input from '../components/Input';
import { saveNewLocation, setCurrentCoordinates } from '../actions/index';

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ saveNewLocation, setCurrentCoordinates }, dispatch);
};

export default connect(null, mapDispatchToProps)(Input);