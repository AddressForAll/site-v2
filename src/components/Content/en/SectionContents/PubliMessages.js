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
            <h2>Addresses Matter!</h2>
            <p className="lead">
              Not knowing where an address is located can cost you time, lives,
              fuel, and rework.
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
              <span className="muted">Problem:</span> Separate DBs!
            </h2>
            <p className="lead">
              Municipalities, utilities and logistics companies improve their
              address databases, but each keeps its own database isolated from
              the others.
            </p>
          </div>
          <div className="col col-2-5">
            <img
              src={db}
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              alt="Problem: Separate DBs!"
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
              their addresses in a single, public domain, collaborative database
              that everyone can consult and download for free.
            </p>
          </div>
          <div className="col col-2-5">
            <img
              src={docs}
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              alt="Lets Collaborate"
            />
          </div>
        </div>
      </Container>
    </Section>
    )
}

export default PubliMessages;