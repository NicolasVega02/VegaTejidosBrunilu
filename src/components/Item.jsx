
import React from 'react'
import { Carousel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



const Item = ({product}) => {
  
  return (

    <div>
      <Card className="cardStyle" style={{ fontFamily: '"Roboto Mono", serif' }}>
        {/* Si hay más de 1 imagen, usar Carousel */}
        {product.img && product.img.length > 1 ? (
          <Carousel>
            {product.img.map((img, index) => (
              <Carousel.Item key={index}>
                <img className="d-block w-100" src={img} alt={`Imagen ${index + 1}`} />
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          // Si hay solo 1 imagen, mostrarla como Card.Img
          <Card.Img variant="top" src={product.img?.[0]} alt={product.name} />
        )}

        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            {product.description} <br /> ${product.price}.00
          </Card.Text>
          <Button as={Link} to={`/item/${product.id}`} className="btn-orange">
            Comprar
          </Button>
        </Card.Body>
      </Card>
    </div>

     
  )
}

export default Item