import React from "react"
import WavesDiv from "../../components/waves_div/index.jsx";
import Header from "../../components/header/index.jsx";
import EsteticIntro from "./intro_verano/index.jsx";
import AestheticsServices from "../../components/services/index.jsx";
import Testimonials from "../../components/testimonials/index.jsx";
import About from "../../components/about/index.jsx";
import Contact from "../../components/contact/index.jsx";
import Injectables from "../../components/other_services/injectables/index";
import Manuals from "../../components/other_services/manuals/index";
import Footer from "../../components/footer/index.jsx";
import { Container, PurpleDivider1, PurpleDivider2 } from "../../components/styles/styles.js";


function VeranoEstetica() {
  return (
    <>
      <Header />
      <EsteticIntro />
      <PurpleDivider1 />
      <WavesDiv id="Platforms">
        <AestheticsServices />
        <Container id="Procedures">
          <Injectables />
        </Container>
        <Container>
          <Manuals />
        </Container>
      </WavesDiv>
      <PurpleDivider2 />
      <Container id="Testimonials">
        <Testimonials />
      </Container>
      <PurpleDivider1 />
      <About id="About"/>
      <PurpleDivider2 />
      <Contact id="Contact"/>
      <Footer />
    </>
  )
}

export default VeranoEstetica