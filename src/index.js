import React from 'react';
import ReactDOM from 'react-dom';
import './SASS/index.scss';
import App from './containers/App/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension'
import { HashRouter } from 'react-router-dom';


const store = createStore(rootReducer, composeWithDevTools())

ReactDOM.render(
  <HashRouter basename="/palette-picker-fe">
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
, document.getElementById('root'));

