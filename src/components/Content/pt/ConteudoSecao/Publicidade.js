import React from "react";
import Container from "../../../Container/Container";
import RowContainer from "../../../Container/Row";

const Advertisment = () => {
    return (
    <Container id="advertisment">
      <RowContainer>
            <div className="col col-2-5 justify-content-center">
                <h1>AddressForAll</h1>
                <p className="text-bg-white">
                    Para que os serviços cheguem ao lugar certo, endereços são uma questão de soberania para qualquer país.
                </p>
                <p>
                <a href="#" className="btn btn-blue link-bg-blue">
                    Assista ao vídeo
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