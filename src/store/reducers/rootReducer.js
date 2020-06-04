import authReducer from './authReducer';
import contactReducer from './contactReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  contact: contactReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
