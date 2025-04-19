import './menu.css'
import { IoGridOutline } from "react-icons/io5";


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
          <IoGridOutline />
        </div>
      </div>
    </header>
  );
};

