import React, { useState , useContext } from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom';
import { Button, Carousel } from 'react-bootstrap';
import { CartContext } from '../context/CartContext'
import Loader from './Loader';
import Card from 'react-bootstrap/Card';
import Swal from 'sweetalert2';




const ItemDetail = ({ productDetail }) => {
 
    const [compra, setCompra] = useState(false)
    const {addItem} = useContext(CartContext)

    const onAdd = (cantidad) => {
      setCompra(true)
      Swal.fire({
        icon:'success',
        title:`Agregaste ${productDetail.name} al carrito`,
        showConfirmButton:false,
        timer:1500
      })
      addItem (productDetail, cantidad)
  };

  if (!productDetail) {
      return <p><Loader></Loader></p>;
  }
  

  return (
    <div className='itemDetail2'>   
      <div className='itemDetail'>
          {productDetail.img && productDetail.img.length > 1 ? (
          <Carousel>
            {productDetail.img.map((img, index) => (
              <Carousel.Item key={index}>
                <img className="d-block w-100" src={img} alt={`Imagen ${index + 1}`} />
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <Card.Img variant="top" src={productDetail.img?.[0]} alt={productDetail.name} />
        )}
        
        
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
    </div>
  );
};


export default ItemDetail