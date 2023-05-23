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
          <Link to={`/modelo`} className="new-btn">
            Modelo
          </Link>
        </li>
        <li>
          <Link to={`/brand`} className="new-btn">
            Marca
          </Link>
        </li>
        <li>
          <Link to={`/posicao`} className="new-btn">
            Posição
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
