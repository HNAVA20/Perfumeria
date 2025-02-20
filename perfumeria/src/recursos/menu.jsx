import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importar Link de React Router
import logo from "../imagenes/Logo UT.png";
import "../recursos/menu.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(null);

  const toggleSubmenu = (index) => {
    setSubmenuOpen(submenuOpen === index ? null : index);
  };

  return (
    <nav>
      <div className="menu-container">
        <Link to="/"><img src={logo} alt="Logo UT" className="logo" /></Link>

        {/* Botón de hamburguesa */}
        <button 
          className={`menu-toggle ${menuOpen ? "open" : ""}`} 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
        </button>

        {/* Menú con clases dinámicas */}
        <ul className={`menu ${menuOpen ? "open" : ""}`}>
          <li><Link to="/">Inicio</Link></li>

          <li className={`submenu ${submenuOpen === 1 ? "open" : ""}`}>
            <a href="#" onClick={() => toggleSubmenu(1)}>Aspirantes</a>
            <ul>
              <li><Link to="/acceso-plataforma">Acceso a la plataforma</Link></li>
              <li><Link to="/pre-registro">Pre-registro</Link></li>
              <li><Link to="/convocatoria">Convocatoria de ingreso 2025</Link></li>
              <li><Link to="/recorrido">Recorrido Virtual</Link></li>
            </ul>
          </li>

          <li className={`submenu ${submenuOpen === 2 ? "open" : ""}`}>
            <a href="#" onClick={() => toggleSubmenu(2)}>Alumnos</a>
            <ul>
              <li><Link to="/calendario-escolar">Calendario escolar</Link></li>
              <li><Link to="/becas">Becas</Link></li>
            </ul>
          </li>

          <li><Link to="/carreras">Carreras</Link></li>

          <li className={`submenu ${submenuOpen === 3 ? "open" : ""}`}>
            <a href="#" onClick={() => toggleSubmenu(3)}>Docente</a>
            <ul>
              <li><Link to="/calendario-escolar">Calendario escolar</Link></li>
            </ul>
          </li>

          <li className={`submenu ${submenuOpen === 4 ? "open" : ""}`}>
            <a href="#" onClick={() => toggleSubmenu(4)}>Plataformas</a>
            <ul>
              <li><Link to="#">APP SIGA</Link></li>
              <li><Link to="#">Servicios generales</Link></li>
              <li><Link to="#">Servicios informáticos</Link></li>
              <li><Link to="#">Universo de la Tecnología</Link></li>
              <li><Link to="#">SIDOUT</Link></li>
              <li><Link to="#">Plataforma de Transparencia UTN</Link></li>
              <li><Link to="#">Portal de Transparencia Nacional</Link></li>
              <li><Link to="#">Enlace P.N.T</Link></li>
              <li><Link to="#">Registro Empresas Bolsa de Trabajo</Link></li>
            </ul>
          </li>

          <li><Link to="/vinculacion">Vinculación</Link></li>
          <li><Link to="/psicologia">Psicología</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
