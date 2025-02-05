import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import CartItem from './CartItem'

const CartList = () => {

    const {cart, clear, cartTotal} = useContext(CartContext)

  return (
    <div style={{width:'100%', padding:'2rem', display:'flex', flexDirection:'column', alignItems:'center'}}>
        {cart.map((compra)=><CartItem compra={compra} key={compra.id}/>)}
        <span>Total a pagar: ${cartTotal()}</span>
        <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', paddingTop:24}}>

        <button className='btn btn-danger' onClick={clear}>Vaciar carrito</button>
        <button className='btn btn-primary'>Terminar compra</button>
        </div>
    </div>
  )
}

export default CartList