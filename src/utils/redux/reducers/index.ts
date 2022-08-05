import { combineReducers } from '@reduxjs/toolkit';
import appReducer from './app-reducer';
import markerReducer from './marker-reducer';
import setupReducer from './setup-reducer';

const reducer = combineReducers({
    app: appReducer,
    setup: setupReducer,
    marker: markerReducer,
});

export default reducer;
