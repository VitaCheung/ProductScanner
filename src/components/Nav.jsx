import {NavLink} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPenNib } from '@fortawesome/free-solid-svg-icons';




export default function Nav() {
  return (
    <nav id="main-nav" aria-label="Main navigation">
      <ul>
        <li>
          <NavLink to="/"><FontAwesomeIcon icon="fa-solid fa-house" size="xl" /></NavLink>          
          <NavLink to="/"> Home</NavLink>
        </li>
        <li>
        <NavLink to="/scanner"><FontAwesomeIcon icon="fa-solid fa-barcode" size="xl" /></NavLink>
          <NavLink to="/scanner"> Scan</NavLink>
        </li>
        <li>
        <NavLink to="/about"><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" size="xl" /></NavLink>         
          <NavLink to="/about"> Search</NavLink>
        </li>
        <li>
        <NavLink to="/saveditems"><FontAwesomeIcon icon="fa-solid fa-bookmark" size="xl" /></NavLink>         
          <NavLink to="/saveditems"> Bookmark</NavLink>
        </li>
      </ul>
    </nav>
  );
}