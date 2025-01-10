import React from 'react'
import { BsCart } from "react-icons/bs";
import Badge from 'react-bootstrap/Badge';

const CartWidget = () => {
  return (
    <div className='cartWidgetContainer'>
        <span><BsCart /></span>
        <Badge bg="danger">5</Badge>
       
        </div>
  )
}

export default CartWidget