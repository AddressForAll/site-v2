import React from "react";

import Main from "../../Container/Main";
import Publicidade from "./ConteudoSecao/Publicidade";
import PesquisarEndereco from "./ConteudoSecao/PesquisarEndereco";
import PubllicarMensagens from "./ConteudoSecao/PubllicarMensagens";
import Servicos from "./ConteudoSecao/Servicos";
import InstitutoAFA from "./ConteudoSecao/InstitutoAFA";

import "../../../assets/css/style.css";

const InicioConteudo = () => (
  <Main>
    <Publicidade/>
    <PesquisarEndereco/>
    <PubllicarMensagens/>
    <Servicos/>
    <InstitutoAFA/>
  </Main>
)

export default InicioConteudo;
