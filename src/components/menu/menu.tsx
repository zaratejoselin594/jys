import './menu.css'


interface Props {
  isMenuOpen: boolean,
  toggleMenu: () => void,
}
export const Nav = ({ isMenuOpen, toggleMenu }: Props) => {
  return (
    <header className="nav">
      <div className="nav-content">
        <div className="cart-icon">
          <span>🛒</span>
        </div>
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
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </header>
  );
};
