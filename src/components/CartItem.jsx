import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const CartItem = ({compra}) => {
    const {removeItem}= useContext(CartContext) 
 return (
    <tr>
      <td>
        {compra.id}
      </td>
      <td>
        <div style={{display:'flex' , gap:'10px', justifyContent:'center'}}>
          <img src={compra.img} alt={compra.name} style={{width:'5rem'}}/>
          {compra.name}
        </div> 
      </td> 
      <td>{compra.quantity}</td>  
      <td><span>${compra.price}</span></td> 
      <td>${compra.quantity * compra.price}</td>  
      <td><button className='btn btn-danger' onClick={()=>removeItem(compra.id)}>X</button></td>    
    </tr>
  )
}

export default CartItem