import React, { useContext } from 'react'
import { BsCart } from "react-icons/bs";
import Badge from 'react-bootstrap/Badge';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
  const {cart} = useContext(CartContext)
  return (
    <div className='cartWidgetContainer'>
        <span ><BsCart/></span>
        <Badge bg="danger">{cart.length}</Badge>
       
        </div>
  )
}

export default CartWidget