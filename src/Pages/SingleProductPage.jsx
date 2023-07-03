import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ReactStars from 'react-stars'
import Swal from 'sweetalert2'
import ImageSection from '../Components/ImageSection'

function SingleProductPage() {
  const { productID } = useParams()
  const [singleProduct, setSingleProduct] = useState({})

  const [comment, setComment] = useState("")
  const [ratingstar, setRatingstar] = useState(0)


  const [productQuantity, setProductQuantity] = useState(1)

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

  const addToCart = () => {
    const payload = {
      ...singleProduct,
      productQuantity,
      totalPrice: productQuantity * singleProduct.price
    }
    console.log(payload)

    Swal.fire({
      title: 'Added to Cart!',
      icon: 'success',
      confirmButtonText: 'Continue Shopping',

    })
  }


  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${productID}`).then(json => setSingleProduct(json.data))

  }, [])

  return (
    <>

      <div className="container">
        <div className="text-center mt-4">
          <h1>{singleProduct.title} - {singleProduct.price}$</h1>
          <p className="text-secondary">{singleProduct.description}</p>
          <div className='d-flex justify-content-center align-items-center'>
            <span className='mx-2'>
              Ratings:
            </span>
            <ReactStars
              count={5}
              size={24}
              edit={false}
              value={singleProduct.rating}
              color2={'#ffd700'} />
          </div>


        </div>


        <div className="container">
          <div className="">

            {
              singleProduct?.images?.length > 0 && <ImageSection images={singleProduct.images} />
            }

            <div className="border-top w-30">
              <label className='my-3 mx-3'>Quantity:<button onClick={() => setProductQuantity(productQuantity - 1)} disabled={productQuantity > 1 ? false : true} className="btn btn-danger mx-3">-</button>{productQuantity}<button onClick={() => setProductQuantity(productQuantity + 1)} className="btn btn-danger ms-3">+</button>
              </label>
              <button onClick={addToCart} className="btn btn-danger mx-1">Add to Cart</button>

            </div>


          </div>
          <div className="">
            <div className='container'>
              <div className="mb-5">
                <h1 className=" text-center">Review Us</h1>
                <p className="text-secondary text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, eum fugi</p>
              </div>
              <div className="form-floating">
                <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  style={{ height: 60 }}
                  defaultValue={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              

                <label htmlFor="floatingTextarea2">Comments</label>
              </div>
              <div className='mt-3'>
                Rate Us:
                <div className="d-flex align-items-center">
                  <ReactStars
                    count={5}
                    size={24}
                    value={ratingstar}
                    onChange={ratingChanged}
                    color2={'#ffd700'} />
                  <span className='ms-3'>
                    ({ratingstar})
                  </span>

                </div>
              </div>
              <h5 className='mt-3'>Delivery details:</h5>
              <p>Please note that your order will be dispatched within 48 - 72 hours.</p>
              <button className='btn btn-danger text-left' onClick={submitReview}>Submit review</button>
            </div>
          </div>

        </div>

        <div>

        </div>
      </div>

    </>
  )
}

export default SingleProductPage