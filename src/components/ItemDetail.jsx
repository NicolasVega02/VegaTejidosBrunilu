import React, { useState , useContext } from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { CartContext } from '../context/CartContext'
import Loader from './Loader';
import CenteredComponent from './CenteredComponent';



const ItemDetail = ({ productDetail }) => {
 
    const [compra, setCompra] = useState(false)
    const {cart, addItem} = useContext(CartContext)

    const onAdd = (cantidad) => {
      setCompra(true)
      addItem (productDetail, cantidad)
  };

  if (!productDetail) {
      return <p><Loader></Loader></p>;
  }
  

  return (
    <CenteredComponent >
          <h1 className='barraDeEncabezado'>Detalle de: {productDetail.name}</h1>
          <img src={productDetail.img} alt={productDetail.name} style={{width : '30%' }} />
          <p>{productDetail.description}</p>
          <p>Stock disponible: {productDetail.stock} unidades</p>
          <p>Precio: ${productDetail.price}</p>
          {!compra 
           ?<ItemCount stock={productDetail.stock} onAdd={onAdd} />
            : <Button as={Link} to={`/cart`} className='btn btn-dark'>Ir al carrito</Button>
            }
    </CenteredComponent>
  );
};


export default ItemDetail