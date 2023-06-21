import {NavLink} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Nav() {
  return (
    <nav id="main-nav" aria-label="Main navigation">
      <ul>
        <li>
          <NavLink to="/"><FontAwesomeIcon icon="fa-solid fa-house" size="xl" />Home</NavLink>          
        </li>
        <li>
        <NavLink to="/scanner"><FontAwesomeIcon icon="fa-solid fa-barcode" size="xl" />Scan</NavLink>
        </li>
        <li>
        <NavLink to="/about"><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" size="xl" />Search</NavLink>         
        </li>
        <li>
        <NavLink to="/saveditems"><FontAwesomeIcon icon="fa-solid fa-bookmark" size="xl" />Bookmarks</NavLink>         
        </li>
      </ul>
    </nav>
  );
}