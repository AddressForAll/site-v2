import React from 'react'
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/corporate/About'
import Statute from '../pages/corporate/Statute'
import Projects from '../pages/corporate/Projects'
import Partnerships from '../pages/corporate/Partnerships'
import API from '../pages/resources/API'
import Data from '../pages/resources/Data'
import Services from '../pages/resources/Services'
import Tools from '../pages/resources/Tools'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" element={<Home />} />
            
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
