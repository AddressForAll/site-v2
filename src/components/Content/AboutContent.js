import React from "react";
import Main from "../Container/Main";
import AboutUs from "./SectionContents/AboutUs";
import Sponsors from "./SectionContents/Sponsors";
import InstituteAFA from "./SectionContents/InstituteAFA";
import Footer from "../Footer/Footer";

const AboutContent = () => (
    <Main>
        <AboutUs/>
        <Sponsors/>
        <InstituteAFA/>
        <Footer/>
    </Main>
)

export default AboutContent