import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navigation from './Components/Navigation'
import { useState } from "react";

import Footer from './Components/Footer'
import HomePage from './Pages/HomePage'
import SignupPage from './Pages/SignupPage'
import LogInPage from './Pages/LogInPage'
import ProductsPage from './Pages/ProductsPage'
import CategoryPage from './Pages/CategoryPage'
import SingleProductPage from './Pages/SingleProductPage';

function App() {
  const [user, setuser] = useState(true);


  return (
    <>
      <Navigation />

      {/* {user ? (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Products" element={<ProductsPage />} />
          <Route path="/Products/:productID" element={<SingleProductPage />} />

          <Route path="/products/category/:categoryName" element={<CategoryPage />} />

        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Signup" element={<SignupPage />} />
          <Route path="/Login" element={<LogInPage />} />
          <Route path="*" element={<Navigate to="/Login" replace={true} />} />
        </Routes>

      )} */}


      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Products" element={<ProductsPage />} />
        <Route path="/Products/:productID" element={<SingleProductPage />} />
        <Route path="/products/category/:categoryName" element={<CategoryPage />} />
        <Route path="/Signup" element={<SignupPage />} />
        <Route path="/Login" element={<LogInPage />} />
        <Route path="*" element={<Navigate to="/Login" replace={true} />} />
      </Routes>


      <Footer />
    </>
  )
}

export default App
