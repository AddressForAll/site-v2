import React from 'react'
import Container from '../Container/Container'
import RowContainer from '../Container/Row'
import '../../assets/css/style.css'

const Content = () => (
        <main>
            <Container id="advertisment">
                <RowContainer>
                    <div className="col col-2-5 justify-content-center">
                        <h1>AddressForAll</h1>
                        <p className="lead">
                        For services to reach the right place, addresses are a matter of
                        sovereignty for any country.
                        </p>
                        <p className="lead">
                        <a href="#" className="btn btn-blue">Continue reading...</a>
                        </p>
                    </div>
                    <div className="col col-3-5 embed-youtube">
                        <iframe
                        src="https://www.youtube.com/embed/6sT6Xm8jwCI"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        ></iframe>
                    </div>
                </RowContainer>
            </Container>

            <section id="searchAddr" className="parallax">
                <div className="container">
                <h3>find an address</h3>
                <form id="searchForm" className="searchform">
                    <div className="input-group">
                    <input className="input-search" type="text" />
                    <button className="btn btn-search" type="button">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="3 3 17.49 17.49"
                        >
                        <path
                            d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                        ></path>
                        </svg>
                    </button>
                    </div>
                </form>
                </div>
            </section>

            <section id="publiMessages">
                <div className="container">
                <div className="row featurette">
                    <div className="col col-3-5 justify-content-center">
                    <h2>Addresses Matter!</h2>
                    <p className="lead">
                        Not knowing where an address is located can cost you time,
                        lives, fuel, and rework.
                    </p>
                    </div>
                    <div className="col col-2-5">
                    <img
                        src="../assets/img/search.png"
                        role="img"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                        alt=""
                    />
                    </div>
                </div>

                <hr className="divider" />

                <div className="row featurette">
                    <div className="col col-3-5 justify-content-center order-2">
                    <h2><span className="muted">Problem:</span> Separate DBs!</h2>
                    <p className="lead">
                        Municipalities, utilities and logistics companies improve their
                        address databases, but each keeps its own database isolated from
                        the others.
                    </p>
                    </div>
                    <div className="col col-2-5">
                    <img
                        src="../assets/img/db.png"
                        role="img"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                        alt=""
                    />
                    </div>
                </div>

                <hr className="divider" />

                <div className="row featurette">
                    <div className="col col-3-5 justify-content-center">
                    <h2>Let's Collaborate!</h2>
                    <p className="lead">
                        This is why the AddressForAll Institute has been created. The
                        project invites everyone to participate in the effort and to put
                        their addresses in a single, public domain, collaborative
                        database that everyone can consult and download for free.
                    </p>
                    </div>
                    <div className="col col-2-5">
                    <img
                        src="../assets/img/docs.png"
                        role="img"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                        alt=""
                    />
                    </div>
                </div>
                </div>
            </section>

            <section id="aboutUs">
                <div className="container">
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
                        />
                    </div>
                    <p>Thierry Jean<span className="muted">France / Brazil</span></p>
                    </li>

                    <li>
                    <div className="crew-photo">
                        <img
                        src="http://addressforall.org/resources/img/equipe-filipe.jpg"
                        />
                    </div>
                    <p>Filipe Rocha<span className="muted">Brazil</span></p>
                    </li>

                    <li>
                    <div className="crew-photo">
                        <img
                        src="http://addressforall.org/resources/img/equipe-peter.jpg"
                        />
                    </div>
                    <p>Peter Krauss<span className="muted">Brazil</span></p>
                    </li>

                    <li>
                    <div className="crew-photo">
                        <img
                        src="http://addressforall.org/resources/img/equipe-leopoldo.jpg"
                        />
                    </div>
                    <p>Leopoldo Arnaiz<span className="muted">Spain</span></p>
                    </li>

                    <li>
                    <div className="crew-photo">
                        <img
                        src="http://addressforall.org/resources/img/equipe-ignacio.jpg"
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
                        src="http://addressforall.org/resources/img/equipe-enio.jpg"
                        />
                    </div>
                    <p>Ênio Alencar<span className="muted">GIS</span></p>
                    </li>

                    <li>
                    <div className="crew-photo">
                        <img
                        src="http://addressforall.org/resources/img/equipe-ignacio.jpg"
                        />
                    </div>
                    <p>Ignácio Arnaiz<span className="muted">UrbiGIS</span></p>
                    </li>

                    <li>
                    <div className="crew-photo">
                        <img
                        src="http://addressforall.org/resources/img/equipe-igor.gif"
                        />
                    </div>
                    <p>Igor Eliezer Borges<span className="muted">GIS</span></p>
                    </li>

                    <li>
                    <div className="crew-photo">
                        <img
                        src="http://addressforall.org/resources/img/equipe-peter.jpg"
                        />
                    </div>
                    <p>Peter Krauss<span className="muted">Coord. back-end</span></p>
                    </li>
                </ul>
                </div>
            </section>

            <section id="sponsors">
                <div className="container">
                <h2>Sponsors</h2>
                <p className="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
                    illum mollitia esse quam ducimus delectus molestiae, natus
                    repellendus doloremque eligendi, neque minima quas, quaerat pariatur
                    aut? Ab laboriosam dolorem autem!
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
                </div>
            </section>

            <section id="services">
                <div className="container">
                <h2>Our Services</h2>
                <p className="lead">
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
                        <p>You submit an address and the API returns a Lat/Long</p>
                    </div>
                    </li>

                    <li>
                    <div className="card-image">
                        <img
                        src="http://addressforall.org/resources/img/servicos_reversa.png"
                        alt="geocoding"
                        />
                    </div>
                    <div className="card-content">
                        <h4>API: Reverse Geocoding</h4>
                        <p>You submit a Lat/Long and the API returns an address</p>
                    </div>
                    </li>

                    <li>
                    <div className="card-image">
                        <img
                        src="http://addressforall.org/resources/img/servicos_batch.png"
                        alt="geocoding"
                        />
                    </div>
                    <div className="card-content">
                        <h4>API: Batch Query</h4>
                        <p>
                        You submit a set of addresses and the API returns the
                        addresses that match the addresses that are in the
                        AddressForAll database
                        </p>
                    </div>
                    </li>
                </ul>
                </div>
            </section>

            <section id="instituteAFA">
                <div className="container">
                <div className="message">
                    <h2>Institute AddressForAll</h2>
                    <p className="lead">
                    The AddressForAlL Geo-social Technologies Institute aims to
                    advocate for open data and social improvement through the good use
                    of technology with an emphasis on geo-spatial technologies.
                    </p>
                    <p>
                    <a href="#" className="btn btn-green">About Us</a>
                    </p>
                </div>
                </div>
            </section>
        </main>
)

export default Content