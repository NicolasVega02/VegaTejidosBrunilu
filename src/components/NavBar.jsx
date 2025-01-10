import CartWidget from "./CartWidget"
import logoTejidos from "../imagenes/logoTejidos.jpg";
const NavBar = () => {

    return(
        <nav className="contenedorNavBar">
            <a href="" className="navHome"><img className = "imgLogo" src={logoTejidos} alt="tejidosBruniluLogo" /></a>
            <a href="" className="catNav">Indumentaria</a>
            <a href="" className="catNav">Amigurumis</a>
            <a href="" className="catNav">Combos</a>
            <CartWidget/>
        </nav>

    )
}
export default NavBar