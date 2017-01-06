import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDmOA1kmKUV78Zs89HCP9IvE4-uV4pByI8',
      authDomain: 'manager-react-native.firebaseapp.com',
      databaseURL: 'https://manager-react-native.firebaseio.com',
      storageBucket: 'manager-react-native.appspot.com',
      messagingSenderId: '85724589710',
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
