export const selectLibrary = (id) => {
    return {
        type: 'SELECTED_LIBRARY',
        payload: id
    };
};