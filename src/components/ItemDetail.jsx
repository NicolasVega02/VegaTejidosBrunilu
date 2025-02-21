import React, { useState , useContext } from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { CartContext } from '../context/CartContext'
import Loader from './Loader';
import Card from 'react-bootstrap/Card';




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
    <div className='itemDetail'>
          <Card.Img variant="top" src={productDetail.img} alt={productDetail.name} />
        <div className='infoContainer'>
          <Card.Body>
            <Card.Title><h1>{productDetail.name}</h1></Card.Title>
              <Card.Text>
                <p>{productDetail.description}</p>
                <p>Stock disponible: {productDetail.stock} unidades</p>
                <p>Precio: ${productDetail.price}</p>
              </Card.Text>
          </Card.Body>  
        
            <div className='counterContainer'> 
            {!compra 
            ?<ItemCount stock={productDetail.stock} onAdd={onAdd} />
            : <Button as={Link} to={`/cart`} className='btn btn-dark'>Ir al carrito</Button>
            }
            </div>
        </div>
     
    </div>
  );
};


export default ItemDetail