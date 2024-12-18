import './Navbar.css';
import { NavLink } from 'react-router';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">home</NavLink></li> | <li><NavLink to="/sell">Sell</NavLink></li> | <li><NavLink to="/buy">Buy</NavLink></li>
      </ul>
    </nav>
  )
}