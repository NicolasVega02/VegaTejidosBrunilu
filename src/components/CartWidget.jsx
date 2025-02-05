import React, { useContext } from 'react'
import { BsCart } from "react-icons/bs";
import Badge from 'react-bootstrap/Badge';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
  const {cartQuantity } = useContext(CartContext)
  return (
    <div className='cartWidgetContainer'>
        <span ><BsCart/></span>
        <Badge bg="danger">{cartQuantity()}</Badge>
       
        </div>
  )
}

export default CartWidget