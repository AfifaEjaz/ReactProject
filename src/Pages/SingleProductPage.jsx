import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ReactStars from 'react-stars'
import Swal from 'sweetalert2'
import ImageSection from '../Components/ImageSection'
import { useContext } from 'react';
import { CartContext } from '../context/addtoCart/context'

function SingleProductPage() {
  const { productID } = useParams()
  const [singleProduct, setSingleProduct] = useState({})

  const [comment, setComment] = useState("")
  const [ratingstar, setRatingstar] = useState(0)


  const [productQuantity, setProductQuantity] = useState(1)

  const { state, dispatch } = useContext(CartContext)

  const submitReview = () => {
    const payload = {
      productID: productID,
      review: comment,
      rating: ratingstar
    }
    console.log(payload)


    Swal.fire({
      title: 'Successfully Submitted!',
      text: 'Thanks for Reviewing!',
      icon: 'success',
      confirmButtonText: 'Continue Shopping',

    })
  }

  const ratingChanged = (newRating) => {
    setRatingstar(newRating)
  }

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${productID}`)
      .then(json => setSingleProduct(json.data))


  }, [])

  const addToCart = (item) => {
    dispatch(
      {
        type: "ADD_TO_CART",
        payload: item
      }
    )
  }

  return (
    <>

      <div className="container d-flex justify-content-center align-items-center" style={{ height: '100%', width: '100%' }}>

        <div className="container row mt-5">
          <div className="col-md-6">

            {
              singleProduct?.images?.length > 0 && <ImageSection images={singleProduct.images} />

            }

          </div>
          <div className="col-md-6">
            <div className='container'>
              <div className="mb-5 mt-4">
                <h4>{singleProduct.title} - {singleProduct.price}$</h4>
                <p className="text-secondary">{singleProduct.description}</p>
                <div className='d-flex align-items-center'>
                  <span >
                    Ratings:
                  </span>
                  <ReactStars
                    count={5}
                    size={24}
                    edit={false}
                    value={singleProduct.rating}
                    color2={'#ffd700'} />
                </div>
                <div><strong>Category: </strong>
                  <span className='ms-2'>{singleProduct.category}</span>
                </div>
                <div>
                  <strong>Brand:</strong>
                  <span className='ms-2'>{singleProduct.brand}</span>
                </div>
                <div className="border-top w-30 mt-4">
                  <label className='my-3 mx-3'>Quantity:<button onClick={() => setProductQuantity(productQuantity - 1)} disabled={productQuantity > 1 ? false : true} className="btn btn-danger mx-3">-</button>{productQuantity}<button onClick={() => setProductQuantity(productQuantity + 1)} className="btn btn-danger ms-3">+</button></label>
                  <button onClick={() => addToCart(singleProduct)} className="btn btn-danger mx-1">Add to Cart</button>
                </div>



              </div>

            </div>
          </div>
          <h1 className=" ">Review Us</h1>
          <p className="text-secondary ">Because Your Review Matters</p>

          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{ height: 60 }}
              defaultValue={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <label className='ms-2' htmlFor="floatingTextarea2">Comments</label>
          </div>
          <div className='mt-3'>
            Rate Us:
            <div className="d-flex justify-content-between align-items-center">
              <div>
              <ReactStars
                count={5}
                size={24}
                value={ratingstar}
                onChange={ratingChanged}
                color2={'#ffd700'} />
              <span className=''>
                ({ratingstar})
              </span>
              </div>
             
              <div>
                <button className='btn btn-danger text-left' onClick={submitReview}>Submit review</button>
              </div>
            </div>
          </div>
          <h5 className='mt-3'>Delivery details:</h5>
          <p>Please note that your order will be dispatched within 48 - 72 hours.</p>


        </div>

      </div>

    </>
  )
}


export default SingleProductPage