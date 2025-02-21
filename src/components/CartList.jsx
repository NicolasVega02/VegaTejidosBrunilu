import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'


const CartList = () => {

    const {cart, clearCart, cartTotal} = useContext(CartContext)

  return (
    <div className='w-100 d-flex flex-column align-items-center'>
      <Table className="table text-center">
        <thead className="table-secondary">
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Producto</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Precio</th>
            <th scope="col">Subtotal</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((compra)=> <CartItem key={compra.id} compra={compra}/>)}
        </tbody>
        <tfoot className="table-secondary">
          <tr>
            <td colSpan="4"></td> {/* Celdas vacías para alinear el total */}
            <td className="fw-bold">Total a pagar:</td>
            <td className="fw-bold"> ${cartTotal()}</td>
          </tr>
        </tfoot>
      </Table>  
      <div >
        <button className='btn btn-danger' onClick={clearCart}>Vaciar carrito</button>
        <Link to={'/checkout'} className='btn btn-primary'>Finalizar Compra</Link>
      </div>
    </div>
    
  )
}

export default CartList