import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
// import '<link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css">'
import CartContextProvider from './context/addtoCart/context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartContextProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </CartContextProvider>

  ,
)
