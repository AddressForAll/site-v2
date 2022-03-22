import React from "react";
import Section from "../../Container/Section";
import Container from "../../Container/Container";

const Sponsors = () => {
    return (
    <Section id="sponsors">
      <Container>
        <h2>Sponsors</h2>
        <p className="lead">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          illum mollitia esse quam ducimus delectus molestiae, natus repellendus
          doloremque eligendi, neque minima quas, quaerat pariatur aut? Ab
          laboriosam dolorem autem!
        </p>
        <ul className="sponsors flex-list">
          <li>
            <a
              href="https://dadosabertos.social/c/dados-espaciais/12"
              rel="external"
            >
              <img
                src="http://addressforall.org/resources/img/dados_abertos.png"
                alt="Dados abertos"
              />
            </a>
          </li>
        </ul>
      </Container>
    </Section>
    )
}

export default Sponsors;