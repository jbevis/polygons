const Coordinates = (state = [], action) => {
	switch (action.type) {
		case 'SAVE_COORDINATES':
			const index = state.indexOf(action.data);

			if (index !== -1) {
				return state.filter((arr, i) => i !== index);
			}
			return state.concat([action.data]);
		default:
			return state;
	}
};

export default Coordinates;