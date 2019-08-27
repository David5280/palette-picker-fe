import React from 'react';
import ReactDOM from 'react-dom';
import './SASS/index.scss';
import App from './App/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension'
import { HashRouter } from 'react-browser-router';


const store = createStore(rootReducer, composeWithDevTools())

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
, document.getElementById('root'));

