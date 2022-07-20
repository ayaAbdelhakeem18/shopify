import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { Provider } from 'react-redux';
import {configureStore} from "@reduxjs/toolkit";
import displayproduct from "../src/features/productsSlice";
import cartreducer from "../src/features/cartslice"

const store =configureStore({reducer:{
products:displayproduct,
cart:cartreducer,
}});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
     <App />
     </Provider>
  </React.StrictMode>
);


