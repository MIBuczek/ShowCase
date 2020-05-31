import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import Firebase from './Firebase';

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reactReduxFirebase(Firebase), 
    reduxFirestore(Firebase, {attachAuthIsReady: true}),
  )
);

store.firebaseAuthIsReady.then(()=> {
  ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
})
