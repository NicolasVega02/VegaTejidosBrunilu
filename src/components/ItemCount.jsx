import React from 'react'
import { useState } from 'react'
const ItemCount = ({stock}) => {
 
    const [count , setCount] = useState(1)
    
    const add = () => {
        setCount(count + 1)
    }
    const subtract = () => {
        setCount (count -1)
    }
    console.log('valor De count : ' , count)
    console.log()
    return (
   <div>
    
     <div>
       <button onClick={subtract} disabled={count===0}>-</button>
       <span>{count}</span>
       <button onClick={add} disabled={count===stock}>+</button>
     </div>
     <button>Agregar al carrito</button>
   </div>
   )
}

export default ItemCount