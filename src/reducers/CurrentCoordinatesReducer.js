const CurrentCoordinates = (state = [], action) => {
  switch (action.type) {
    case 'SET_CURRENT_COORDINATES':
      state = [];
      return state.concat(action.data);
    default:
      return state;
  }
};

export default CurrentCoordinates;