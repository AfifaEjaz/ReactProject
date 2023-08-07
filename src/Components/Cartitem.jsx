import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useContext } from 'react';
import { AiOutlinePlus, AiOutlineMinus, AiFillDelete } from 'react-icons/ai'
import { RxCross1 } from 'react-icons/rx'
import { CartContext } from '../context/addtoCart/context'

export default function Cartitem({ data }) {

  const [productQuantity, setproductQuantity] = useState(1)
  const totalPrice = data.price * productQuantity


console.log(data.id)

  const { state, dispatch } = useContext(CartContext)

  const deleteItem = (item) => {
    
    dispatch (
      {
        type : "DELETE_ITEM",
        payload : item
      }
    )
  }

  return (
    <>
      <Card className='mb-3 shadow-sm border border-danger'>
        <div className="row g-0">

          <div className="col-md-4">
            <img className='img-fluid rounded-start p-2'
              src={data.thumbnail} alt=""
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'fill'
              }} />

          </div>

          <div className="col-md-8">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <div className="card-title">
                  <strong>{data.title}</strong>
                </div>
                <button className='btn btn-light align-self-start '
                  onClick={()=>deleteItem(data)}>< RxCross1 /></button>

              </div>

              <div className="my-3 d-flex align-items-center">
                <button className="btn btn-danger mx-3 " disabled={productQuantity > 1 ? false : true} onClick={() => setproductQuantity(productQuantity - 1)}><AiOutlineMinus /></button>
                {productQuantity}
                <button className="btn btn-danger mx-3" onClick={() => setproductQuantity(productQuantity + 1)}><AiOutlinePlus /></button>
                <div className="card-price">
                  {/* <div>{data.price}$ </div> */}
                  {/* <div></div> */}
                  <strong>{totalPrice}$</strong>
                </div>
              </div>
            </Card.Body>
          </div>

        </div>
      </Card>
    </>
  )
}
