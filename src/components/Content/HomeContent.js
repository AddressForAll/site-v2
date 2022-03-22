import React from "react";
import "../../assets/css/style.css";
// giving paths to the images

import Main from "../Container/Main";
import Advertisment from "./SectionContents/Advertisment";
import SearchAddr from "./SectionContents/SearchAddr";
import PubliMessages from "./SectionContents/PubliMessages";
import AboutUs from "./SectionContents/ConsultingBoard";
import Sponsors from "./SectionContents/Sponsors";
import Services from "./SectionContents/Services";
import InstituteAFA from "./SectionContents/InstituteAFA";

const HomeContent = () => (
  <Main>
    <Advertisment/>
    <SearchAddr/>
    <PubliMessages/>
    <AboutUs/>
    <Sponsors/>
    <Services/>
    <InstituteAFA/>
  </Main>
)

export default HomeContent;
