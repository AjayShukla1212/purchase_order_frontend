import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';

// import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import RRoutes from './routes';
import "antd/dist/antd.min.css";
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { render } from "react-dom";


const root = document.getElementById('root');
render(
  <React.StrictMode>
    <Provider store={store}>
      <RRoutes />
    </Provider>
  </React.StrictMode>,
  root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
