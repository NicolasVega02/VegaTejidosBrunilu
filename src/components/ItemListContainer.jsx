
import { useEffect , useState } from "react"
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import Loader from './Loader'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { dataBase} from '../services/firebase'



const ItemListContainer = ({greeting}) => {
  const [productsList, setProductsList] = useState([])
  const [loader, setLoader] = useState(false)
  const {categoryId} = useParams()

useEffect(()=>{
  setLoader(true)

  const productsCollection = categoryId ? 
  query(collection(dataBase, "products"),where("category" , "==" , categoryId))
  : collection(dataBase , "products")

  getDocs(productsCollection)
  .then((res) => {
    const list = res.docs.map((doc) => {
      return {
        
        id: doc.id,
        ...doc.data()
      };
    });
    setProductsList(list)
  })
  .catch((error) => console.log(error))
  .finally(() => setLoader(false))
},[categoryId])


  return (
    <div className='itemListContainer'>
    {loader ? <Loader/>
      :
      <div >
      <h1 className="centrado">{greeting} {categoryId && <span style={{textTransform :'capitalize'}}>  {categoryId}</span>}</h1>
      <ItemList productsList={productsList}></ItemList>
      </div>
    }</div>
  )
}

export default ItemListContainer