import React from 'react'
import Item from './Item'
import CenteredComponent from './CenteredComponent'

const ItemList = ({productsList}) => {
  return (
    <CenteredComponent className='cardStyle'>
        <div   className='d-flex justify-content-evenly align-items-stretch' >
        {productsList.map((product) => <Item key={product.id} product = {product}></Item>)}
        </div>
    </CenteredComponent>
  )
}

export default ItemList