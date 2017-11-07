import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';
// const reducer = () => {
//     return [];
// }
//berubah jadi spt dibawah

const reducer = combineReducers({
    Libraries: LibraryReducer,
    selected: SelectionReducer
});

export default reducer;