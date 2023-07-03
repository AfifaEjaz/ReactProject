import Products from '../Components/Products'
// import Try from '../Components/try'
import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import axios from 'axios'
import CategorySidebar from '../Components/CategorySidebar';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../Components/LoadingSpinner';

function ProductsPage() {

  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(json => {
        setProducts(json.data.products);
        setIsLoading(false); 
      })
  }, []);

  return (
    <>

      <div style={{ display: 'flex', overflow: 'scroll initial' }}>
        <div className="d-flex">
          {
            <CategorySidebar />
          }
        </div>

        <div className="row mx-5">
          <h1 className='text-center mt-5'>All Products</h1>
          {
            isLoading ?
              (<LoadingSpinner />)
              :
              (products.map((val, key) =>

                <div key={key} className="col-md-4 my-4">
                  <Link className='text-decoration-none' to={`/Products/${val.id}`}>
                    <Card className='mx-2' >
                      <Card.Img style={{ height: '250px' }} className='img-fluid h-10' variant="top" src={val.thumbnail} />
                      <Card.Body>
                        <Card.Title>{val.title}</Card.Title>
                        <Card.Text>
                          {val.description.substring(0,68)}
                        </Card.Text>

                      </Card.Body>
                    </Card>
                  </Link>
                </div>

              ))
          }
        </div>
      </div>
    </>

  )
}

export default ProductsPage