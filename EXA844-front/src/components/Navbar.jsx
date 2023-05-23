import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>
        <Link to={`/`}>Home</Link>
      </h2>
      <ul>
        <li>
          <Link to={`/new`} className="new-btn">
            Modelo
          </Link>
        </li>
        <li>
          <Link to={`/`} className="new-btn">
            Mais Populares
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
