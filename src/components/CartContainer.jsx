import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import EmptyCart from './EmptyCart'
import CartList from './CartList'

const CartContainer = () => {
  const {cart} = useContext(CartContext)
  
  return (
    <div className='cartContainer'>
      {cart.length 
      ? <CartList/> : <EmptyCart/>
      }
    </div>
  )
}

export default CartContainer