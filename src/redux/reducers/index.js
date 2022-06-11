import {combineReducers} from 'redux';
import appStateReducer from './appStateReducer';

const appReducer = combineReducers({
  appState: appStateReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;