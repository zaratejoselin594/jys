import './menu.css'
import { IoMenuOutline } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";


interface Props {
  isMenuOpen: boolean,
  toggleMenu: () => void,
}
export const Nav = ({ isMenuOpen, toggleMenu }: Props) => {
  return (
    <header className="nav">
      <div className="nav-content">
        <p className="nav-title">JyS Viajes</p>
        <nav>
          <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
            <li>Inicio</li>
            <li>Productos</li>
            <li>Contactos</li>
            <li>Sobre nosotros</li>
          </ul>
        </nav>
        <div className="menu-btn" onClick={toggleMenu}>
          <IoMenuOutline />
        </div>
      </div>
    </header>
  );
};

