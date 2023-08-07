import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
import Cartitem from './Cartitem';
import { BsFillCartXFill } from 'react-icons/bs'
import { CartContext } from '../context/addtoCart/context';

export default function Cart() {

  const [show, setShow] = useState(false);


  const { state, dispatch } = useContext(CartContext)

  return (
    <>
      <Button type='button' onClick={() => setShow(true)} className='position-relative btn btn-light text-danger'>
        <BsFillCartXFill />
        <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
          {state.cart.length}
          <span className='visually-hidden'>unread messages</span>
        </span>
      </Button>

      <Offcanvas show={show} onHide={() => setShow(false)} placement='end' name='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart
            <button className='ms-4 btn btn-outline-danger'
            onClick={ () => dispatch({
              type : 'CLEAR_CART'
            })}
            >Remove All</button>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>

          {
            state.cart.map((val, key) => <Cartitem key={key} data={val} />)
          }


        </Offcanvas.Body>

      </Offcanvas>
    </>
  )
}
