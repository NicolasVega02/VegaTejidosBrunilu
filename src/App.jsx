
import './App.css'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import NavBarReactBootstrap from './components/NavBarReactBootstrap'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import {CartProvider } from './context/CartContext'
import CartWidget from './components/CartWidget'


function App() {
  
  
  return (
    
   
    
    <BrowserRouter>
      <CartProvider>
      <NavBarReactBootstrap/>
      <Routes>
        <Route path ='/' element = {<ItemListContainer greeting ='Bienvenido a Tejidos Brunilu'></ItemListContainer>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer greeting='Categoria : '/>}/>
        <Route path='/item/:id' element = {<ItemDetailContainer/>}/>
        <Route path='/cart' element = {<CartWidget/>}/>
      </Routes>
      </CartProvider>
    </BrowserRouter>
   
  )
}


export default App
