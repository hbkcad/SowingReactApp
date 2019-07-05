import { createStore, combineReducers } from 'redux';

import stateReducer from './reducers/statereducer'
import cityReducer from './reducers/cityreducer'
import grainReducer from './reducers/grainReducer';
import plowReducer from './reducers/plowReducer';
import soilReducer from './reducers/soilReducer';
import userReducer from './reducers/userReducer';

const store = createStore(combineReducers({
   states:stateReducer,
   city:cityReducer,
   grain:grainReducer,
   plow:plowReducer,
   soil:soilReducer,
   user:userReducer
}),
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;