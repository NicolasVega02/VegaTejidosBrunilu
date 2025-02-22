import React from 'react'
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import {dataBase} from '../services/firebase'
import Loader from './Loader';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
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
        Swal.fire({
          icon: "warning",
          title:'No se admiten campos vacios'
        })
    }else if (comprador.email != emailValido){
      Swal.fire({
        icon: "warning",
        title:'Las direcciones de correo no coinciden'
      })
    }else{
      setLoader(true)
      let venta = {
      comprador : comprador,
      venta : cart,
      total : cartTotal(),
      date : serverTimestamp()
      } 
    
      
      const ventas = collection(dataBase  , "ventas")
  
      
      
      
      addDoc(ventas , venta)
      .then((res) => {
        
        setVentaId(res.id)
        clearCart()
        Swal.fire({
          icon: 'success',
          title: "Tu orden fue generada con exito",
          text: `El Id de tu compra es ${res.id}` ,
          confirmButtonText: 'OK',
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `
          }
        });
       
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
    <div className='checkout'>
      {ventaId !== '' ?
      <div  className='despedida'  style={{marginLeft : "20%"}}>
        <h1>Muchas gracias por confiar en nosotros.</h1>
        <h3>Te invitamos a seguir chusmenado nuestros productos ❤</h3>
        
        <Link to = '/' className='btn btn-success' style={{marginLeft : "30%", padding:"30px"}}> Ir al HOME </Link>
        
      </div>
      : 
     <div className='formContainer'>
        <h3>Complete los datos para finalizar la compra</h3>
        <div className='form'>
          <form className='d-flex flex-column  w-50 ' onSubmit={finalizarCompra}>
            <input type="text" name="name" placeholder="Ingrese su nombre" onChange={dataComprador} />
            <input type="text" name='lastName' placeholder='Ingrese su apellido' onChange={dataComprador}/>
            <input type="text" name='address' placeholder='Ingrese su direccion' onChange={dataComprador}/>
            <input type="email" name='email' placeholder='Ingrese su E-mail' onChange={dataComprador}/>
            <input type="email" name='segundo-email' placeholder='Ingrese nuevamente su E-mail' onChange={(e)=>setEmailValido(e.target.value)}/>
            <button className='btn btn-success' type='submit'> Enviar </button>
          </form>
        </div>
     </div>
    }
    </div>
  )   
} 


export default Checkout