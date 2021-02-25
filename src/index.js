import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContextProvider } from './containers/ContextProvider';

ReactDOM.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
  , document.getElementById('App'),
);
