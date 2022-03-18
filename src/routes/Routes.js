import React from 'react'
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'
import About from '../pages/About'
import Projects from '../pages/Projects'
import Home from '../pages/Home'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
        </Switch>
    </BrowserRouter>
);

export default Routes
