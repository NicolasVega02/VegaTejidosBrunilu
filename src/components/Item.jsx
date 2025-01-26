import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



const Item = ({product}) => {
    console.log(product)
  return (
 
  <Card style={{borderColor:'#fd7e14', width: '18rem' , marginTop:'15', height:'100%'}}>
      <Card.Img variant="top" src={product.img} alt={product.name} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          {product.description} <br /> ${product.price}.00      
        </Card.Text>
        <Button as={Link} to={`/item/${product.id}`} className='btn-orange' >Comprar</Button>
      </Card.Body>
    </Card>
  
  )
}

export default Item