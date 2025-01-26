import React,{useEffect,useState} from "react";
import FetchList from "./FetchList";


const FetchContainer = () => {

    const [personajes,setPersonajes] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
   
    useEffect (()=>{
        setLoading(true)
        setError(null)
        
        fetch('https://rickandmortyapi.com/api/character')
        .then((res) => res.json())//Convertimos a json
        .then((data)=> setPersonajes(data.results)) //guardar la respuesta
        .catch((error) => setError(true))
        .finally(()=> setLoading(false))

    },[])
    console.log(personajes, 'personajes')
 return (<div>{loading ? <p>Cargando Personajes...</p> : <FetchList personajes = {personajes}></FetchList>}</div>)
}
export default FetchContainer