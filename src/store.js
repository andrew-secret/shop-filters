import { createStore, combineReducers } from 'redux';
import rateReducer from  'reducers/rateReducer';
import sortReducer from  'reducers/sortReducer';

const rootReducer = combineReducers({
    rateState: rateReducer,
    sortState: sortReducer,
});

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);