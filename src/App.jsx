
import './App.css'
import ComponenteDePrueba from './components/ComponenteDePrueba'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
function App() {
  
  const greeting  = 'Bienvenidos a Tejidos Brunilu' 
  return (
    <div>
      <NavBar/>
      <ItemListContainer>{greeting}
      </ItemListContainer>
    </div>
   
  )
}


export default App
