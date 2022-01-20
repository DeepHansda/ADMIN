import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/css/style.css'
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './Redux/store/store'
import './assets/css/index.css'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>

    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

