import { combineReducers } from 'redux';
import { penderReducer } from 'redux-pender';
import list from './list';

export default combineReducers({ list, pender: penderReducer });
