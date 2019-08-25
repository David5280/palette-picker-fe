import React from 'react';
import ReactDOM from 'react-dom';
import './SASS/index.scss';
import App from './App/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers/';
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(rootReducer, composeWithDevTools())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));

