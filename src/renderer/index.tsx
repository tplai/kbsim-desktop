import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './features/main/Main'
import store from './app/store';
import { Provider } from 'react-redux';

require('./assets/images/favicon.ico');
// require('file-loader?name=[name].[ext]!./index.html');

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Main/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

