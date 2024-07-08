import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { stores } from './app/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
   <Provider store={stores}>
      <App />
   </Provider>
);
