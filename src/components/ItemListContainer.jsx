import {getProducts} from '../mock/data'
import { useEffect , useState } from "react"
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import Loader from './Loader'
import CenteredComponent from './CenteredComponent'



const ItemListContainer = ({greeting}) => {
  const [productsList, setProductsList] = useState([])
  const [loader, setLoader] = useState(false)
  const {categoryId} = useParams()

 useEffect (()=>{   
    setLoader(true)
    getProducts()
        .then((res)=> {
          if(categoryId){
            setProductsList(res.filter((item)=> item.category === categoryId ))
          }else{
            setProductsList(res)
          }
        
        })
        .catch((error)=> console.log(error))
        .finally(()=>setLoader(false))
        
 },[categoryId])

 console.log(productsList,'data')
  return (
    <div className='fondoVerde'>
    {loader ? <Loader/>
      :
      <CenteredComponent >
      <h1>{greeting} {categoryId && <span style={{textTransform :'capitalize'}}>  {categoryId}</span>}</h1>
      <ItemList productsList={productsList}></ItemList>
      </CenteredComponent>
    }</div>
  )
}

export default ItemListContainer