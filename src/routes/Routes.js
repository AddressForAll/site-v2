import React from 'react'
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'

import Inicio from '../pages/pt/Inicio'

import Home from '../pages/en/Home'
import About from '../pages/en/corporate/About'
import Statute from '../pages/en/corporate/Statute'
import Projects from '../pages/en/corporate/Projects'
import Partnerships from '../pages/en/corporate/Partnerships'
import API from '../pages/en/resources/API'
import Data from '../pages/en/resources/Data'
import Services from '../pages/en/resources/Services'
import Tools from '../pages/en/resources/Tools'

const Routes = () => (
    <BrowserRouter>
        <Switch>

            {/* Rota em Português brasileiro */}
            
            <Route path="/" element={<Inicio />} />
            
            {/* <Route path="sobre" element={<Sobre />} />
            <Route path="estatuto" element={<Estatuto />} />
            <Route path="projetos" element={<Projetos />} />
            <Route path="parcerias" element={<Parcerias />}/>
            
            <Route path="api-pt" element={<ApiPT />} />
            <Route path="dados" element={<Dados />} />
            <Route path="servicos" element={<Servicos />} />
            <Route path="ferramentas" element={<Ferramentas />} /> */}
            

            {/* Rota em inglês */}

            <Route path="/en" element={<Home />} />
            
            <Route path="about" element={<About />} />
            <Route path="statute" element={<Statute />} />
            <Route path="projects" element={<Projects />} />
            <Route path="partnerships" element={<Partnerships />}/>
            
            <Route path="api" element={<API />} />
            <Route path="data" element={<Data />} />
            <Route path="services" element={<Services />} />
            <Route path="tools" element={<Tools />} />
        </Switch>
    </BrowserRouter>
);

export default Routes
