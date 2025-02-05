import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const CartItem = ({compra}) => {
    const {removeItem}= useContext(CartContext) 
 return (
    <div style={{margin:24, diplay:'flex', justifyContent:'space-around', alignItems:'center', width:'90%'}}>
        <img src={compra.img} alt={compra.name} style={{width:'10rem'}}/>
        <span>{compra.name}</span>
        <span>cantidad:{compra.quantity}</span>
        <span>${compra.price}</span>
        <button className='btn btn-danger' onClick={()=>removeItem(compra.id)}>X</button>
    </div>
  )
}

export default CartItem