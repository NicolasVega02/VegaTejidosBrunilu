import React from 'react'
import { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import Loader from './Loader'
import { dataBase } from '../services/firebase'
import { collection, doc, getDoc } from 'firebase/firestore'


const ItemDetailContainer = () => {
    const [productDetail, setProductDetail]= useState({})
    const [loading , setLoading] = useState(false)
    const {id} = useParams()
    const [invalidItem, setInvalidItem]=useState(false)

    useEffect(()=>{
      setLoading(true)
      //conectar con nuestra collection
      const productCollection = collection(dataBase, "products")
      //crear una referencia
      const docRef= doc(productCollection,id )
      //Paso mas corto como la ppt
      // const docRef= doc(db, "products", id)
      //traer el documento
      getDoc(docRef)
      .then((res)=> {
        if(res.data()){
          setProductDetail({id:res.id, ...res.data()})
        }else{
          setInvalidItem(true)
        }
      })
      .catch((error)=> console.log(error))
      .finally(()=> setLoading(false))
    },[])

    if(invalidItem){
      return <div>
        <h2>El item no existe! 😱</h2>
        <Link to='/' className='btn btn-dark'>Volver a Home</Link>
      </div>
    }
  return (
    <div>
        {loading ? <Loader/>
        : <ItemDetail productDetail={productDetail}/>
        }
    </div>

    
  )
}


export default ItemDetailContainer