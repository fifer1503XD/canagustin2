import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { store } from './store/store';
import { Provider } from "react-redux";
import { AppRouter } from './router/AppRouter';

ReactDOM.render(
 
  <Provider store= {store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);
