import React from "react";
import Main from "../../Container/Main";
import QuemSomos from "./ConteudoSecao/QuemSomos";
import Patrocinadores from "./ConteudoSecao/Patrocinadores";
import InstituteAFA from "./ConteudoSecao/InstitutoAFA";
import Rodape from "../../Footer/pt/Rodape";

const SobreConteudo = () => (
    <Main>
        <QuemSomos/>
        <Patrocinadores/>
        <InstituteAFA/>
        <Rodape/>
    </Main>
)

export default SobreConteudo