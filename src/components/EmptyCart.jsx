import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div className='emptyCart'>
        <h1>tu carrito esta vacio 😥</h1>
        <h2>Con gusto sigue explorando nuestro productos 😁</h2>
        <Link to = '/' className='btn btn-success'>Ir a Home</Link>
    </div>
  )
}

export default EmptyCart