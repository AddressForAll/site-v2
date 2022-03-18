import React from 'react'
import Container from '../components/Container/Container'
import Content from '../components/Content/Content'
import Header from '../components/Header/Header'

import '../assets/css/style.css'
import Footer from '../components/Footer/Footer'

const Home = () => (
    <>
        <Header />
        <Container>   
            <Content />
        </Container>
        <Footer/>
    </>
)

export default Home