import React from 'react'
import Item from './Item'

const ItemList = ({productsList}) => {
  return (
    <div id='cards' className='d-flex justify-content-evenly align-items-stretch' >
        {productsList.map((product) => <Item key={product.id} product = {product}></Item>)}
    </div>
  )
}

export default ItemList