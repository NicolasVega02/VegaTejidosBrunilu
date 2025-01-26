import {getProducts} from '../mock/data'
import { useEffect , useState } from "react"
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'


const ItemListContainer = ({greeting}) => {
  const [productsList, setProductsList] = useState([])
  const {categoryId} = useParams()

 useEffect (()=>{   
  getProducts()
        .then((res)=> {
          if(categoryId){
            setProductsList(res.filter((item)=> item.category === categoryId ))
          }else{
            setProductsList(res)
          }
        
        })
        .catch((error)=> console.log(error))
 },[categoryId])

 console.log(productsList,'data')
  return (
    <div>
      <h1>{greeting} {categoryId && <span style={{textTransform :'capitalize'}}>  {categoryId}</span>}</h1>
      {<ItemList productsList={productsList}></ItemList>}
    </div>
  )
}

export default ItemListContainer