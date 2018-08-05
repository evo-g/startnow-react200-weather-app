import { combineReducers } from 'redux';
import searchEntriesReducer from './components/SearchEntries/searchEntriesReducer';
// import { createStore, applyMiddleWare, compose } from 'redux';


const rootReducer = combineReducers({
// add reducers
search: searchEntriesReducer


});

export default rootReducer;
