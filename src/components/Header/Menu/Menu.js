import React from 'react'

const Menu = () => (
  <div class="navbar justify-content-lg-start">
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
            href="about"
            id="corporateMenuLink"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Corporate
          </a>
          <ul className="dropdown-menu" aria-labelledby="corporateMenuLink">
            <select className="form-select" aria-label="Language">
              <option value="pt">pt</option>
              <option value="es">sp</option>
              <option value="en">en</option>
            </select>
            <li>
              <a className="dropdown-item" href="/About">
                About US
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#!">
                Statute
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#!">
                Projects
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#!">
                Partnerships
              </a>
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
          >
            Resources
          </a>
          <ul className="dropdown-menu" aria-labelledby="resourcesMenuLink">
            <li>
              <a className="dropdown-item" href="#!">
                Data
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#!">
                Services
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#!">
                API
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#!">
                Tools
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#!">FAQ</a>
        </li>
        <li>
          <a href="#!">Contact</a>
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

export default Menu