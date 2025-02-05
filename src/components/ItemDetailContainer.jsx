import React from 'react'
import { useState, useEffect } from 'react'
import { getOneProduct  , getProducts} from '../mock/data'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import Loader from './Loader'

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail]= useState({})
    const [loading , setLoading] = useState(false)
    const {id} = useParams()


    useEffect(()=>{
      setLoading(true)  
      getOneProduct(id)
        .then((res)=> setProductDetail(res))
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[])
  return ( 
    
    <div className='fondoVerde'> 
      {loading
      ? <Loader/>
      : <ItemDetail productDetail={productDetail}/>
      }
    </div>

       
    
  )
}


export default ItemDetailContainer