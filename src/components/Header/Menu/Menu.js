import React from "react";

const Menu = ({ lang }) => (
  <section className="navigation">
      <div className="nav-container">
        <a id="takemehome" href="/">
          <div className="brand">
            <svg>
              <use xlinkHref="#logosvg"></use>
            </svg>
          </div>
        </a>
        <nav>
          <div className="nav-mobile"><a id="nav-toggle" href="#!"><span></span></a></div>
          <ul className="nav-list">
            <li>
              <a href="#!">Instituto</a>
              <ul className="nav-dropdown">
                <li>
                  <a href="/sobre">Quem Somos</a>
                </li>
                <li>
                  <a href="#!">Projetos</a>
                </li>
                <li>
                  <a href="#!">Estatuto</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#!">Recursos</a>
              <ul className="nav-dropdown">
                <li>
                  <a href="#!">Dados</a>
                </li>
                <li>
                  <a href="#!">Serviços</a>
                </li>
                <li>
                  <a href="#!">API</a>
                </li>
                <li>
                  <a href="#!">Ferramentas</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#!">FAQ</a>
            </li>
            <li>
              <a href="#!">Contato</a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
);

export default Menu;
