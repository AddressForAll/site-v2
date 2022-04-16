import React from "react";
import Container from "../../../Container/Container";
import Section from "../../../Container/Section";
import thierry from "../../../../assets/img/people/equipe-thierry.jpg"
import filipe from "../../../../assets/img/people/equipe-filipe.jpg"
import peter from "../../../../assets/img/people/equipe-peter.jpg"
import leopoldo from "../../../../assets/img/people/equipe-leopoldo.jpg"
import ignacio from "../../../../assets/img/people/equipe-ignacio.jpg"
import enio from "../../../../assets/img/people/equipe-enio.jpg"
import igor from "../../../../assets/img/people/equipe-igor.gif"

const QuemSomos = () => (
    <Section id="aboutUs">
        <Container>
            <h2>Quem Somos?</h2>
            <p className="lead">
            O instituto de Teconologia Geo-Sociais AddressForAlL tem por objetivo 
            a defesa dos dados abertos e da melhoria social através do bom uso da 
            tecnologia com ênfase nas tecnologias geo-espaciais.
            </p>
            <h2>Histórico</h2>
            <p className="lead">
            Como parte do seu trabalho no apoio do projeto de mapa colaborativo OpenStreetMap, durante 3 anos, os fundadores do Instituto tentaram motivar o governo Brasileiro a criar uma base de dados de endereços aberta e colaborativa no Brasil.
            Vendo que o projeto não passava da ideação, devido à falta de vontade ou força política, Thierry Jean, Filipe Rocha e Peter Krauss decidiram lançar o projeto 'Endereço para todos' em 2020 no âmbito de uma associação sem fins lucrativos chamada 'Instituto de Tecnologias Geo-Sociais AddressForAll'.
            </p>
            <h2>Evolução</h2>
            <p className="lead">
            A criação do Instituto permitiu aos seus criadores de juntar debaixo de um mesmo guarda-chuva legal alguns projetos de pesquisas e de melhoria social, sempre com uso forte de geolocalização.
            </p>
            <h2>Conselho Consultivo</h2>
            <p className="lead">
            O Conselho consultivo é constituído por membros efetivos e honorários de notória competência e reputação em suas áreas, 
            e norteia a atuação do Instituto.
            </p>
            <h3>Permanent Associates</h3>
            <p>Members with voting rights in the general assemblies.</p>

            <ul className="crew flex-list">
                <li>
                    <div className="crew-photo">
                    <img src={thierry} />
                    </div>
                    <p>Thierry Jean<span className="muted">France / Brazil</span></p>
                </li>

                <li>
                    <div className="crew-photo">
                    <img
                        src={filipe}
                    />
                    </div>
                    <p>Filipe Rocha<span className="muted">Brazil</span></p>
                </li>

                <li>
                    <div className="crew-photo">
                    <img
                        src={peter}
                    />
                    </div>
                    <p>Peter Krauss<span className="muted">Brazil</span></p>
                </li>

                <li>
                    <div className="crew-photo">
                    <img
                        src={leopoldo}
                    />
                    </div>
                    <p>Leopoldo Arnaiz<span className="muted">Spain</span></p>
                </li>

                <li>
                    <div className="crew-photo">
                    <img
                        src={ignacio}
                    />
                    </div>
                    <p>Ignácio Arnaiz<span className="muted">Spain</span></p>
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
                        src={enio}
                    />
                    </div>
                    <p>Ênio Alencar<span className="muted">GIS</span></p>
                </li>

                <li>
                    <div className="crew-photo">
                    <img
                        src={ignacio}
                    />
                    </div>
                    <p>Ignácio Arnaiz<span className="muted">UrbiGIS</span></p>
                </li>

                <li>
                    <div className="crew-photo">
                    <img
                        src={igor}
                    />
                    </div>
                    <p>Igor Eliezer Borges<span className="muted">GIS</span></p>
                </li>

                <li>
                    <div className="crew-photo">
                    <img
                        src={peter}
                    />
                    </div>
                    <p>Peter Krauss<span className="muted">Coord. back-end</span></p>
                </li>
            </ul>
    </Container>
    </Section>
)

export default QuemSomos