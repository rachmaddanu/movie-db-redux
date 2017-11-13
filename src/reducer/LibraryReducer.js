const LibraryReducer = (state = [], action) => {
    switch (action.type) {
        case 'LIBRARY_MOVIE':
            // console.log(action.payload);
            return action.payload;
        default:
            return state;
    }
};

export default LibraryReducer;