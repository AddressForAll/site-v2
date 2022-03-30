import React from "react";
import Main from "../../Container/Main";
import QuemSomos from "./ConteudoSecao/QuemSomos";
import Patrocinadores from "./ConteudoSecao/Patrocinadores";
import InstituteAFA from "./ConteudoSecao/InstitutoAFA";
import Footer from "../../Footer/en/Footer";

const SobreConteudo = () => (
    <Main>
        <QuemSomos/>
        <Patrocinadores/>
        <InstituteAFA/>
        <Footer/>
    </Main>
)

export default SobreConteudo