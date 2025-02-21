import React from 'react'
import Item from './Item'
import { Col, Container, Row } from 'react-bootstrap';

const ItemList = ({productsList}) => {
  return (
    
    <Container fluid>
    <Row className="justify-content-center">
      {productsList.map((product) => (
        <Col key={product.id} xs={12} sm={6} md={3} className="mb-4">
          <Item product={product} />
        </Col>
      ))}
    </Row>
  </Container>
);
};
 

export default ItemList