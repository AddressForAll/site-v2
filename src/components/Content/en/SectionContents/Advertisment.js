import React from "react";
import Container from "../../../Container/Container";
import RowContainer from "../../../Container/Row";

const Advertisment = () => {
    return (
    <Container id="advertisment">
      <RowContainer>
            <div className="col col-2-5 justify-content-center">
                <h1>AddressForAll</h1>
                <p className="lead">
                For services to reach the right place, addresses are a matter of
                sovereignty for any country.
                </p>
                <p className="lead">
                <a href="#" className="btn btn-blue">
                    Continue reading...
                </a>
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
    );
}

export default Advertisment;