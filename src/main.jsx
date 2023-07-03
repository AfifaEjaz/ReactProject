import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
// import '<link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css">'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> <App /></BrowserRouter> 
  </React.StrictMode>,
)
