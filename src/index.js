import React from 'react';

// import ReactDOM from 'react-dom/client';
import './index.css';
import { render } from "react-dom";
import reportWebVitals from './reportWebVitals';
import RRoutes from './routes';
import "antd/dist/antd.min.css";
import { Provider } from 'react-redux';
import { store } from './redux/store';


const root = document.getElementById('root');

render(
  <React.StrictMode>
  <Provider store={store}>
    <RRoutes />
    </Provider>
  </React.StrictMode>,root
);

// render(<RRoutes />, root);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
