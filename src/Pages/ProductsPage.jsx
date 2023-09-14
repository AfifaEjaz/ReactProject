import Products from '../Components/Products'
// import Try from '../Components/try'
import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import axios from 'axios'
import CategorySidebar from '../Components/CategorySidebar';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { CartContext } from '../context/addtoCart/context'
import LoadingSpinner from '../Components/LoadingSpinner';
import { useContext } from 'react';

function ProductsPage() {

  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  const { state, dispatch } = useContext(CartContext)

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(json => {
        setProducts(json.data.products);
        setIsLoading(false);
      })
  }, []);

  const addtoCart = (item) => {

    dispatch(
      {
        type: "ADD_TO_CART",
        payload: item
      }
    )
  }

  return (
    <>

      <div style={{ display: 'flex', overflow: 'scroll initial' }}>
        <div className="d-flex">
          {
            <CategorySidebar />
          }
        </div>

        <div className="row mx-1">
          <h1 className='text-center mt-5'>All Products</h1>
          {
            isLoading ?
              (<LoadingSpinner />)
              :
              (products.map((val, key) =>

                <div key={key} className="col-md-3 my-4 ">

                  <Card className='mx-2 shadow-lg bg-white rounded' >
                    <Link className='text-decoration-none' to={`/Products/${val.id}`}>
                      <Card.Img style={{ height: '250px' }} className='img-fluid h-10' variant="top" src={val.thumbnail} />
                    </Link>
                    <Card.Body>
                      <Card.Title>{val.title}</Card.Title>
                      <Card.Text>
                        {val.description.substring(0, 38)}
                      </Card.Text>

                      <Button className='btn btn-danger w-100' onClick={() => addtoCart(val)} variant="primary">Add to Cart!</Button>

                    </Card.Body>
                  </Card>


                </div>

              ))
          }
        </div>
      </div>
    </>

  )
}

export default ProductsPage