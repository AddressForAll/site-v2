import React from "react";
import Section from "../../../Container/Section";
import Container from "../../../Container/Container";

const ConsultingBoard = () => {
  return(
  <Section id="aboutUs">
  <Container>
    <h2>Consulting Board</h2>
    <p className="lead">
      The Consulting Board is made up of permanent and honorary members of
      notable competence and reputation in their areas, and guides the
      Institute's actions.
    </p>
    <h3>Permanent Associates</h3>
    <p>Members with voting rights in the general assemblies.</p>

    <ul className="crew flex-list">
      <li>
        <div className="crew-photo">
          <img
            src="http://addressforall.org/resources/img/equipe-thierry.jpg"
            alt="Thierry Jean"
          />
        </div>
        <p>
          Thierry Jean<span className="muted">France / Brazil</span>
        </p>
      </li>

      <li>
        <div className="crew-photo">
          <img
            src="http://addressforall.org/resources/img/equipe-filipe.jpg"
            alt="Felipe Rocha"
          />
        </div>
        <p>
          Filipe Rocha<span className="muted">Brazil</span>
        </p>
      </li>

      <li>
        <div className="crew-photo">
          <img
            src="http://addressforall.org/resources/img/equipe-peter.jpg"
            alt="Peter Krauss"
          />
        </div>
        <p>
          Peter Krauss<span className="muted">Brazil</span>
        </p>
      </li>

      <li>
        <div className="crew-photo">
          <img
            src="http://addressforall.org/resources/img/equipe-leopoldo.jpg"
            alt="Leopoldo Arnaiz"
          />
        </div>
        <p>
          Leopoldo Arnaiz<span className="muted">Spain</span>
        </p>
      </li>

      <li>
        <div className="crew-photo">
          <img
            src="http://addressforall.org/resources/img/equipe-ignacio.jpg"
            alt="Ignácio Arnaiz"
          />
        </div>
        <p>
          Ignácio Arnaiz<span className="muted">Spain</span>
        </p>
      </li>
    </ul>

    <h3>Technical Team</h3>
    <p>
      Associates and third parties acting as the Institute's technical
      staff.
    </p>

    <ul className="crew flex-list">
      <li>
        <div className="crew-photo">
          <img
            src="http://addressforall.org/resources/img/equipe-enio.jpg"
            alt="Ênio Alencar"
          />
        </div>
        <p>
          Ênio Alencar<span className="muted">GIS</span>
        </p>
      </li>

      <li>
        <div className="crew-photo">
          <img
            src="http://addressforall.org/resources/img/equipe-ignacio.jpg"
            alt="Ignácio Arnaiz"
          />
        </div>
        <p>
          Ignácio Arnaiz<span className="muted">UrbiGIS</span>
        </p>
      </li>

      <li>
        <div className="crew-photo">
          <img
            src="http://addressforall.org/resources/img/equipe-igor.gif"
            alt="Igor Eliezer Borges"
          />
        </div>
        <p>
          Igor Eliezer Borges<span className="muted">GIS</span>
        </p>
      </li>

      <li>
        <div className="crew-photo">
          <img
            src="http://addressforall.org/resources/img/equipe-peter.jpg"
            alt="Peter Krauss"
          />
        </div>
        <p>
          Peter Krauss<span className="muted">Coord. back-end</span>
        </p>
      </li>
    </ul>
  </Container>
</Section>
)
}

export default ConsultingBoard;