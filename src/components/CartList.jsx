import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'
import Swal from 'sweetalert2'


const CartList = () => {

    const {cart, clearCart, cartTotal} = useContext(CartContext)
    const vaciarCarrito = () => {
      Swal.fire({
        title: "Se borrara todo el Carrito",
        text: "Desea continuar?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "SI",
        cancelButtonText:"NO"
      }).then((result) => {
        if (result.isConfirmed) {
          clearCart()
          Swal.fire({
            title: "Carrito Borrado",
            icon: "success"
          });
        }
      });
    }
    
  return (
    <div className='w-100 w-md-75 w-lg-50 d-flex flex-column align-items-center'>
      <Table className="table text-center">
        <thead className="table-secondary">
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Producto</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Precio</th>
            <th scope="col">Subtotal</th>
            <th scope="col">Eliminar</th>
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
        <button id='espaciado' className='btn btn-danger' onClick={vaciarCarrito}>Vaciar carrito</button>
        <Link id='espaciado' to={'/checkout'} className='btn btn-success'>Finalizar Compra</Link>
      </div>
    </div>
    
  )
}

export default CartList