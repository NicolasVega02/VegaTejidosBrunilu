import React from 'react'
import ItemCount from './ItemCount'


const ItemDetail = ({ productDetail }) => {
  const onAdd = (cantidad) => {
      alert(`Agregaste ${cantidad} al carrito`);
  };

  if (!productDetail) {
      return <p>Cargando detalles del producto...</p>;
  }

  return (
      <div >
          <h1>Detalle de: {productDetail.name}</h1>
          <img src={productDetail.img} alt={productDetail.name} style={{width : '30%' }} />
          <p>{productDetail.description}</p>
          <p>Stock disponible: {productDetail.stock} unidades</p>
          <p>Precio: ${productDetail.price}</p>
          <ItemCount stock={productDetail.stock} onAdd={onAdd} />
      </div>
  );
};
// const ItemDetail = ({item}) => {
//     const onAdd = (cantidad) => {
//         alert(`Agregaste ${cantidad} al carrito`)
//     }
//   return (
//     <div>
//         <h1>Detalle de : {item.name}</h1>
//         <img src={item.img} alt={item.name}/>
//         <p>{item.description}</p>
//         <p>Stock disponible:{item.stock} unidades</p>
//         <p>Precio: ${item.price}</p>
//         <ItemCount stock={item.stock} onAdd={onAdd}/>
//     </div>
//   )
// }

export default ItemDetail