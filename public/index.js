import React from 'react';
import ReactDOM from 'react-dom';

import './index.html';
import 'font-awesome/css/font-awesome.css';
import './index.scss';

import App from '../src/App';
import reducer from '../src/Reducer';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </ Provider>,
  document.getElementById('app'));
