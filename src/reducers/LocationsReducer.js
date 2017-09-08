const initialState = {
  data: [],
};

const Locations = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_LOCATIONS':
      state = initialState;
      return Object.assign({}, state, { data: state.data.concat(action.data) });
    default:
      return state;
  }
};

export default Locations;