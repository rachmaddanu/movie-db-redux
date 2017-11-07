export default (state = null, action) => {
    switch (action.type) {
        case 'SELECTED_LIBRARY':
            console.log(action.payload, state);
            return action.payload;
        default:
            return state;
    }
};