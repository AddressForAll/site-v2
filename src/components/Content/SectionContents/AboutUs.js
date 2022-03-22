import React from "react";
import Container from "../../Container/Container";
import Section from "../../Container/Section";

const AboutUs = () => (
    <Section id="aboutUs">
        <Container>
            <h2>About Us</h2>
            <p class="lead">
            The AddressForAlL Geo-social Technologies Institute aims to advocate
            for open data and social improvement through the good use of
            technology with an emphasis on geo-spatial technologies.
            </p>
            <h2>Background</h2>
            <p class="lead">
            As part of our work supporting the OpenStreetMap collaborative map
            project, for 3 years the founders of the Institute tried to motivate
            the Brazilian government to create an open and collaborative address
            database in Brazil. Seeing that the project did not go beyond
            ideation due to lack of political will or strength, Thierry Jean,
            Filipe Rocha and Peter Krauss decided to launch the "Address for
            All" project in 2020 within a non-profit association called
            "Institute of Geo-Social Technologies AddressForAll".
            </p>
            <h2>Evolution</h2>
            <p class="lead">
            The creation of the Institute allowed its creators to bring together
            under one legal umbrella a number of research and social improvement
            projects, always with strong use of geolocation.
            </p>
            <h2>Consulting Board</h2>
            <p class="lead">
            The Consulting Board is made up of permanent and honorary members of
            notable competence and reputation in their areas, and guides the
            Institute's actions.
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

export default AboutUs