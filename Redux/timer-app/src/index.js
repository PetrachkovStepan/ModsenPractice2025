import React from 'react';
import ReactDOM from 'react-dom/client'; // Импортируем client
import { Provider } from 'react-redux';
import store from './store';
import Timer from './Timer';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container); // Используем createRoot

root.render(
  <Provider store={store}>
    <Timer />
  </Provider>
);