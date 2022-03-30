import React from "react";
import Container from "../../../Container/Container";
import Section from "../../../Container/Section";

const QuemSomos = () => (
    <Section id="aboutUs">
        <Container>
            <h2>Quem Somos?</h2>
            <p class="lead">
            O instituto de Teconologia Geo-Sociais AddressForAlL tem por objetivo 
            a defesa dos dados abertos e da melhoria social através do bom uso da 
            tecnologia com ênfase nas tecnologias geo-espaciais.
            </p>
            <h2>Histórico</h2>
            <p class="lead">
            Como parte do seu trabalho no apoio do projeto de mapa colaborativo OpenStreetMap, durante 3 anos, os fundadores do Instituto tentaram motivar o governo Brasileiro a criar uma base de dados de endereços aberta e colaborativa no Brasil.
            Vendo que o projeto não passava da ideação, devido à falta de vontade ou força política, Thierry Jean, Filipe Rocha e Peter Krauss decidiram lançar o projeto 'Endereço para todos' em 2020 no âmbito de uma associação sem fins lucrativos chamada 'Instituto de Tecnologias Geo-Sociais AddressForAll'.
            </p>
            <h2>Evolução</h2>
            <p class="lead">
            A criação do Instituto permitiu aos seus criadores de juntar debaixo de um mesmo guarda-chuva legal alguns projetos de pesquisas e de melhoria social, sempre com uso forte de geolocalização.
            </p>
            <h2>Conselho Consultivo</h2>
            <p class="lead">
            O Conselho consultivo é constituído por membros efetivos e honorários de notória competência e reputação em suas áreas, 
            e norteia a atuação do Instituto.
            </p>
            <h3>Permanent Associates</h3>
            <p>Members with voting rights in the general assemblies.</p>

            <ul class="crew flex-list">
                <li>
                    <div class="crew-photo">
                    <img
                        src="http://addressforall.org/resources/img/equipe-thierry.jpg"
                    />
                    </div>
                    <p>Thierry Jean<span class="muted">France / Brazil</span></p>
                </li>

                <li>
                    <div class="crew-photo">
                    <img
                        src="http://addressforall.org/resources/img/equipe-filipe.jpg"
                    />
                    </div>
                    <p>Filipe Rocha<span class="muted">Brazil</span></p>
                </li>

                <li>
                    <div class="crew-photo">
                    <img
                        src="http://addressforall.org/resources/img/equipe-peter.jpg"
                    />
                    </div>
                    <p>Peter Krauss<span class="muted">Brazil</span></p>
                </li>

                <li>
                    <div class="crew-photo">
                    <img
                        src="http://addressforall.org/resources/img/equipe-leopoldo.jpg"
                    />
                    </div>
                    <p>Leopoldo Arnaiz<span class="muted">Spain</span></p>
                </li>

                <li>
                    <div class="crew-photo">
                    <img
                        src="http://addressforall.org/resources/img/equipe-ignacio.jpg"
                    />
                    </div>
                    <p>Ignácio Arnaiz<span class="muted">Spain</span></p>
                </li>
                </ul>

                <h3>Technical Team</h3>
                <p>
                Associates and third parties acting as the Institute's technical
                staff.
                </p>

                <ul class="crew flex-list">
                <li>
                    <div class="crew-photo">
                    <img
                        src="http://addressforall.org/resources/img/equipe-enio.jpg"
                    />
                    </div>
                    <p>Ênio Alencar<span class="muted">GIS</span></p>
                </li>

                <li>
                    <div class="crew-photo">
                    <img
                        src="http://addressforall.org/resources/img/equipe-ignacio.jpg"
                    />
                    </div>
                    <p>Ignácio Arnaiz<span class="muted">UrbiGIS</span></p>
                </li>

                <li>
                    <div class="crew-photo">
                    <img
                        src="http://addressforall.org/resources/img/equipe-igor.gif"
                    />
                    </div>
                    <p>Igor Eliezer Borges<span class="muted">GIS</span></p>
                </li>

                <li>
                    <div class="crew-photo">
                    <img
                        src="http://addressforall.org/resources/img/equipe-peter.jpg"
                    />
                    </div>
                    <p>Peter Krauss<span class="muted">Coord. back-end</span></p>
                </li>
            </ul>
    </Container>
    </Section>
)

export default QuemSomos