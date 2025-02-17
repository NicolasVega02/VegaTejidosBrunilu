import React from 'react'
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import {dataBase} from '../services/firebase'
import Loader from './Loader';
import { Link } from 'react-router-dom';
const Checkout = () => {
  
  const [comprador , setComprador] = useState({})
  const [loader , setLoader] = useState(false)
  const [ventaId , setVentaId] = useState('')
  const [emailValido , setEmailValido] = useState('')

  const {cart, cartTotal, clearCart} = useCart()

  const dataComprador = (e) => {
    setComprador({ 
      ...comprador,
      [e.target.name] : e.target.value
    });
  };

  const finalizarCompra = (e) => {
    // Para que no recargue la pagina
    e.preventDefault()
    //Se validan los datos ingresados en el form
    if(!comprador.name || !comprador.lastName || !comprador.address ){
        alert('No se admiten campos vacios')
    }else if (comprador.email != emailValido){
      alert('Las direcciones de correo no coinciden')
    }else{
      setLoader(true)
      let venta = {
      comprador : comprador,
      venta : cart,
      total : cartTotal(),
      date : serverTimestamp()
      } 
    
      // Creamos la referencia a la coleccion
      const ventas = collection(dataBase  , "ventas")
  
      // Agregamos el documento
      
      //addDoc devuelve una promesa
      addDoc(ventas , venta)
      .then((res) => {
      
        //OPCIONAL ACTUALIZAR STOCK 
      
        setVentaId(res.id)
        clearCart()
      })
      .catch((error)=> console.log(error))
      .finally(()=> setLoader(false))  
      console.log (venta)
    }
    if(loader){
      return <Loader/>
    }
  }
  return (
    <>
    {ventaId !== '' ?
      <div>
        <h3>Tu orden fue generada con exito</h3>
        <h5>el Id de tu compra es {ventaId}</h5>
        <Link to = '/' className='btn btn-success'> Ir al HOME </Link>
      </div>
      : 
     <div>
      <h1>Complete los datos para finalizar la compra</h1>

      <form className='d-flex flex-column  w-50' onSubmit={finalizarCompra}>
            <input type="text" name="name" placeholder="Ingrese su nombre" onChange={dataComprador} />
            <input type="text" name='lastName' placeholder='Ingrese su apellido' onChange={dataComprador}/>
            <input type="text" name='address' placeholder='Ingrese su direccion' onChange={dataComprador}/>
            <input type="email" name='email' placeholder='Ingrese su E-mail' onChange={dataComprador}/>
            <input type="email" name='segundo-email' placeholder='Ingrese nuevamente su E-mail' onChange={(e)=>setEmailValido(e.target.value)}/>
            <button className='btn btn-success' type='submit'> Enviar </button>
      </form>

     </div>
    }
    </>
  )   
} 


export default Checkout