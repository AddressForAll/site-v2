import React from "react";
import Section from "../../../Container/Section";
import Container from "../../../Container/Container";
import search from "../../../../assets/img/search.png";
import db from "../../../../assets/img/db.png";
import docs from "../../../../assets/img/docs.png";

const PubliMessages = () => {
    return (
    <Section id="publiMessages">
      <Container>
        <div className="row featurette">
          <div className="col col-3-5 justify-content-center">
            <h2>Endereços Importam!</h2>
            <p className="text-bg-white">
              Não saber onde está um endereço pode custar Tempo, Vidas, Combustível, Retrabalho.
            </p>
          </div>
          <div className="col col-2-5">
            <img
              src={search}
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              alt="Address Matter!"
            />
          </div>
        </div>

        <hr className="divider" />

        <div className="row featurette">
          <div className="col col-3-5 justify-content-center order-2">
            <h2>
              <span className="muted">Problema:</span> BDs separados!
            </h2>
            <p className="text-bg-white">
              Prefeituras, concessionárias, empresas de logística, 
              melhoram seus bancos de dados de endereços, 
              mas cada um mantem a sua base de dados isolada da base dos outros.
            </p>
          </div>
          <div className="col col-2-5">
            <img
              src={db}
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              alt="Problema: BDs separados!"
            />
          </div>
        </div>

        <hr className="divider" />

        <div className="row featurette">
          <div className="col col-3-5 justify-content-center">
            <h2>Vamos Colaborar!</h2>
            <p className="text-bg-white">
              É por isto que o Instituo AddressForAll foi criado. 
              O projeto convida todos a participar do esforço e a colocar seus endereços num banco de dados único, 
              de domínio público, colaborativo, que todos podem consultar e baixar gratuitamente.
            </p>
          </div>
          <div className="col col-2-5">
            <img
              src={docs}
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              alt="Vamos Colaborar!"
            />
          </div>
        </div>
      </Container>
    </Section>
    )
}

export default PubliMessages;