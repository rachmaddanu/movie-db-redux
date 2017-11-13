export const selectMovie = (id) => {
    return {
        type: 'SELECTED_MOVIE',
        payload: id
    };
};

export const libraryMovie = (lib) => {
    // console.log(lib);
     return {
        type: 'LIBRARY_MOVIE',
        payload: lib
    };
};