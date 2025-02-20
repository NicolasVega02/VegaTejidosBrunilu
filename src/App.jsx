
import './App.css'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import NavBarReactBootstrap from './components/NavBarReactBootstrap'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import {CartProvider } from './context/CartContext'
import CartContainer from './components/CartContainer'
import Checkout from './components/Checkout'
import Home from './components/Home'

function App() {
  
  
  return (
    
   
    <div className='fondoApp'> 

    <BrowserRouter>
      <CartProvider>
      <NavBarReactBootstrap/>
      <Routes>
        <Route path ='/' element = {<Home/>}/>
        <Route path='/products' element = {<ItemListContainer greeting ='Bienvenido a Tejidos Brunilu'></ItemListContainer>}></Route>
        <Route path='/category/:categoryId' element={<ItemListContainer greeting='Categoria : '/>}/>
        <Route path='/item/:id' element = {<ItemDetailContainer/>}/>
        <Route path='/cart' element = {<CartContainer/>}/>
        <Route path='/checkout' element={<Checkout/>} ></Route>
      </Routes>
      
      </CartProvider>
    </BrowserRouter>
   
    </div> 
  )
}


export default App
