import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const FetchCard = ({personaje}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={personaje.image} />
      <Card.Body>
        <Card.Title>{personaje.name}</Card.Title>
       
      </Card.Body>
    </Card>
  )
}

export default FetchCard