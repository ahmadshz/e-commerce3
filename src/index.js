import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from './ReduxToolkit/Store';
import { FavoriteProvider } from './Context/FavoriteContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <FavoriteProvider >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FavoriteProvider>
    </Provider>
  </React.StrictMode>
);


