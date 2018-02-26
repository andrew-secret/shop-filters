import { createStore, combineReducers, compose } from 'redux';
import { connect } from 'react-redux'
import React from 'react';
import { firebaseReducer, reactReduxFirebase } from 'react-redux-firebase';
import * as firebase from 'firebase';
import rateReducer from  'reducers/rateReducer';
import sortReducer from  'reducers/sortReducer';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID
};

// initialize firebase instance
firebase.initializeApp(firebaseConfig)

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    rateState: rateReducer,
    sortState: sortReducer,
});

const createStoreWithMiddleware = compose(
    reactReduxFirebase(firebase, {userProfile: 'users'}),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)(createStore);

const initialState = {};
export const store = createStoreWithMiddleware(
    rootReducer,
    initialState,
);

console.log('firebase', firebase);
