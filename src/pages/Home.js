import React from 'react'
// import Container from '../components/Container/Container'
import Content from '../components/Content/Content'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import '../assets/css/style.css'
import Logo from '../components/Logo/Logo'

const Home = () => (
    <>
        <Logo/>
        <Header />   
        <Content />
        <Footer/>
    </>
)

export default Home