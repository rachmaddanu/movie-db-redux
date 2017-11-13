export default (state = [], action) => {
    switch (action.type) {
        case 'SELECTED_MOVIE':
            // console.log(action.payload, state);
            return action.payload;
        default:
            return state;
    }
};