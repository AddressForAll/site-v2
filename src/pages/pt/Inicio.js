import React from "react";
import Logo from "../../components/Logo/Logo";
import Header from '../../components/Header/Header';
import InicioConteudo from '../../components/Content/pt/InicioConteudo'
import Rodape from '../../components/Footer/pt/Rodape'

const Inicio = () => (
    <>
        <Logo/>
        <Header />   
        <InicioConteudo />
        <Rodape/>
    </>
)

export default Inicio;