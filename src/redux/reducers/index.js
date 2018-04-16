import {combineReducers} from 'redux';
import {routerReducer } from 'react-router-redux';
import reduxCommon from './reduxCommon';
import reduxNews from './reduxNews';
export default combineReducers({
  commonState: reduxCommon,
  newState: reduxNews,
  router:routerReducer
});