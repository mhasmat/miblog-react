import { NavLink } from "react-router-dom";

const Navbar = () => {
  return ( 
        <nav>
            <ul>
                <li>
                    <NavLink to={'/'} className={({isActive}) => (isActive ? "active" : "")}> Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/posteos'} className={({isActive}) => (isActive ? "active" : "")}> Posteos</NavLink>
                </li>
                <li>
                    <NavLink to={'/crear'} className={({isActive}) => (isActive ? "active" : "")}> Crear Posteos</NavLink>
                </li>             
            </ul>
        </nav>
    
  )
}

export default Navbar