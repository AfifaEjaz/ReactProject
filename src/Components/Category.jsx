import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import LoadingSpinner from '../Components/LoadingSpinner';




function Category() {
    const { categoryName } = useParams()
    const [products, setProduct] = useState([])
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        axios.get(`https://dummyjson.com/products/category/${categoryName}`).then(json => {setProduct(json.data.products);
        setIsLoading(false);
    })
    }, [categoryName])

    return (
        <>


            <div className="container">
                <div className="row">
                    <h1 className='text-center mt-4'>{categoryName.toUpperCase()}</h1>


                </div>
                <div className="row">
                    {
                        isLoading? 
                        (<LoadingSpinner />)
                        :
                        (products.map((val, key) =>
                        <div key={key} className="col-md-4 my-4">
                             <Link className='text-decoration-none' to={`/Products/${val.id}`}>
                             <Card >
                                <Card.Img style={{height: '250px'}}  className='img-fluid h-10' variant="top" src={val.thumbnail} />
                                <Card.Body>
                                    <Card.Title>{val.title}</Card.Title>
                                    <Card.Text>
                                        {val.description.substring(0,68)}
                                    </Card.Text>
                                    <Button className='btn btn-danger w-100' variant="primary">Learn more!</Button>
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

export default Category