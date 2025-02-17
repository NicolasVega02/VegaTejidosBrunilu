import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'


const CartList = () => {

    const {cart, clearCart, cartTotal} = useContext(CartContext)

  return (
   <>
   <div >
        {cart.map((compra)=><CartItem compra={compra} key={compra.id}/>)}
        <span>Total a pagar: ${cartTotal()}</span>
        <div >

        <button className='btn btn-danger' onClick={clearCart}>Vaciar carrito</button>
        <Link to={'/checkout'} className='btn btn-primary'>Finalizar Compra</Link>
        </div>
    </div>
    </>
  )
}

export default CartList