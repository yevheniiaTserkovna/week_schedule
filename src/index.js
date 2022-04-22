import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { reducer } from './redux/reducer';
import { Provider } from 'react-redux';

const store = createStore(reducer);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);
root.render(app);
