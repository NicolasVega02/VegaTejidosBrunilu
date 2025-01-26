
import './App.css'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailcontainer'
import NavBarReactBootstrap from './components/NavBarReactBootstrap'
import { BrowserRouter,Routes,Route } from 'react-router-dom'


function App() {
  
  
  return (
    
   
    
    <BrowserRouter>
      <NavBarReactBootstrap/>
      <Routes>
        <Route path ='/' element = {<ItemListContainer greeting ='Bienvenido a Tejidos Brunilu'></ItemListContainer>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer greeting='Categoria : '/>}/>
        <Route path='/item/:id' element = {<ItemDetailContainer/>}/>
        
      </Routes>
    </BrowserRouter>
   
  )
}


export default App
