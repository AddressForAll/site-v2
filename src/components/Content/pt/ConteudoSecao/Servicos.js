import React from "react";
import Section from "../../../Container/Section";
import Container from "../../../Container/Container";

const Servicos = () => {
  return(
    <Section id="services">
      <Container>
        <h2>Nossos Serviços</h2>
        <p className="text-bg-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad adipisci
          impedit vel? Placeat sequi cupiditate, itaque facere necessitatibus
          distinctio sapiente magni culpa ab atque, vitae voluptatem, debitis
          consequatur accusantium quo?
        </p>
        <ul className="flex-list cards">
          <li>
            <div className="card-image">
              <img
                src="http://addressforall.org/resources/img/servicos_geocode.png"
                alt="geocoding"
              />
            </div>
            <div className="card-content">
              <h4>API: Geocoding</h4>
              <p>Você envia um endereço e a API retorna a Latitude/Longitude</p>
            </div>
          </li>

          <li>
            <div className="card-image">
              <img
                src="http://addressforall.org/resources/img/servicos_reversa.png"
                alt="reverse geocoding"
              />
            </div>
            <div className="card-content">
              <h4>API: Reverse Geocoding</h4>
              <p>Você envia a Latitude/Longitude e a API retorna um endereço.</p>
            </div>
          </li>

          <li>
            <div className="card-image">
              <img
                src="http://addressforall.org/resources/img/servicos_batch.png"
                alt="batch query"
              />
            </div>
            <div className="card-content">
              <h4>API: Batch Query</h4>
              <p>
                You submit a set of addresses and the API returns the addresses
                that match the addresses that are in the AddressForAll database
              </p>
            </div>
          </li>
        </ul>
      </Container>
    </Section>
    )
}

export default Servicos;