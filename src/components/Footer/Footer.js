import React from "react";
import Container from "../Container/Container";

const Footer = () => (
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
          <ul className="nav" role="menu">
            <li>
              <a href="#!">About US</a>
            </li>
            <li>
              <a href="#!">Statute</a>
            </li>
            <li>
              <a href="#!">Projects</a>
            </li>
            <li>
              <a href="#!">Partnetships</a>
            </li>
          </ul>
          <hr />
          <ul className="nav" role="menu">
            <li>
              <a href="#!">FAQ</a>
            </li>
            <li>
              <a href="#!">Blog</a>
            </li>
          </ul>
        </div>
        <div className="col col-1-5">
          <ul className="nav" role="menu">
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
        </div>
        <div className="col col-2-5">
          <h3>Contact Us</h3>
          <address vocab="http://schema.org/" typeof="PostalAddress">
            <span property="name" className="hidden">
              Instituto AddressForAll
            </span>
            <span property="streetAddress">Av. Paulista, 171 4º andar </span>
            <span property="addressLocality">Bela Vista</span>, 
            <span property="addressRegion"> São Paulo - SP </span>
            <span property="postalCode">01311-904 </span>
            <span property="addressCountry">Brasil</span>
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
          <ul id="sn-icons" className="nav">
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
);

export default Footer;
