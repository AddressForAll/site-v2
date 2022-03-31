import React from "react";
import Container from "../../Container/Container";

const Rodape = () => (
    <footer>
    <Container>
      <div className="row">
        <div className="col col-1-5 align-items-center">
          <div className="logo">
            <svg>
              <use xlinkHref="#logosvg"></use>
            </svg>
          </div>
        </div>
        <div className="col col-1-5">
          <ul className="menu" role="menu">
            <li>
              <a href="#!">Quem Somos</a>
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
          <hr />
          <ul className="menu" role="menu">
            <li>
              <a href="#!">FAQ</a>
            </li>
            <li>
              <a href="#!">Blog</a>
            </li>
          </ul>
        </div>
        <div className="col col-1-5">
          <ul className="menu" role="menu">
            <li>
              <a href="#!">Dado</a>
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
        </div>
        <div className="col col-2-5">
          <h3>Contato</h3>

          <address itemScope itemType="http://schema.org/Organization">
            <ul
              itemProp="address"
              itemScope
              itemType="http://schema.org/PostalAddress"
            >
              <li className="hidden" itemProp="name">
                Instituto AddressForAll
              </li>
              <li itemProp="streetAddress">Av. Paulista, 171 4º andar</li>
              <li itemProp="addressLocality">Bela Vista</li>
              <li itemProp="addressRegion">São Paulo - SP</li>
              <li itemProp="postalCode">01311-904</li>
              <li itemProp="addressCountry">Brasil</li>
            </ul>
          </address>
          <span itemProp="telephone">+55 11 4063-6401</span>
          <a href="mailto:contato@addressforall.org" itemProp="email">
            contato@addressforall.org
          </a>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col col-4-5">
          <p>© 2022 AddressForAll</p>
        </div>
        <div className="col col-1-5">
          <ul id="sn-icons" className="menu">
            <li>
              <a href="#!">
                <svg>
                  <use xlinkHref="#github"></use>
                </svg>
              </a>
            </li>
            <li>
              <a href="#!">
                <svg>
                  <use xlinkHref="#twitter"></use>
                </svg>
              </a>
            </li>
            <li>
              <a href="#!">
                <svg>
                  <use xlinkHref="#instagram"></use>
                </svg>
              </a>
            </li>
            <li>
              <a href="#!">
                <svg>
                  <use xlinkHref="#facebook"></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  </footer>
)

export default Rodape;