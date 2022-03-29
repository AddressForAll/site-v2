import React from "react";

const Menu = () => (
  <div className="navbar justify-content-lg-start">
    <a id="takemehome" href="/">
      <div className="brand">
        <svg>
          <use xlinkHref="#logosvg"></use>
        </svg>
      </div>
    </a>
    <nav>
      <ul className="nav">
        <li className="dropdown">
          <a
            className="dropdown-toggle"
            href="#!"
            id="corporateMenuLink"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            aria-controls="corporateMenu"
          >
            Instituto
          </a>
          <ul className="dropdown-menu" aria-labelledby="corporateMenuLink">
            <li>
              <a href="/About">Quem Somos</a>
            </li>
            <li>
              <a href="#!">Estatuto</a>
            </li>
            <li>
              <a href="#!">Projetos</a>
            </li>
            <li>
              <a href="#!">Parcerias</a>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <a
            className="dropdown-toggle"
            href="#!"
            id="resourcesMenuLink"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            aria-controls="resourcesMenu"
          >
            Recursos
          </a>
          <ul className="dropdown-menu" aria-labelledby="resourcesMenuLink">
            <li>
              <a href="#!">Data</a>
            </li>
            <li>
              <a href="#!">Services</a>
            </li>
            <li>
              <a href="#!">API</a>
            </li>
            <li>
              <a href="#!">Tools</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#!">FAQ</a>
        </li>
        <li>
          <a href="#!">Contato</a>
        </li>
        <li>
          <a href="#!">Blog</a>
        </li>
      </ul>
      <form className="d-flex">
        <select className="form-select" aria-label="Language">
          <option value="pt">pt</option>
          <option value="es">sp</option>
          <option value="en">en</option>
        </select>
      </form>
    </nav>
  </div>
);

export default Menu;
