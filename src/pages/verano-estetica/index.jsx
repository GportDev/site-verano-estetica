import React from "react"
import PurpleDiv from "../../components/purple_div/index.jsx";
import Header from "../../components/header/index.jsx";
import EsteticIntro from "../../components/intro_verano/index.jsx";
import AestheticsServices from "../../components/services/index.jsx";
import Testimonials from "../../components/testimonials/index.jsx";
import About from "../../components/about/index.jsx";
import Contact from "../../components/contact/index.jsx";
import Injectables from "../../components/other_services/injectables/index";
import Manuals from "../../components/other_services/manuals/index";
import Footer from "../../components/footer/index.jsx";
import { Container } from "../../components/styles/styles.js";


function VeranoEstetica() {
  return (
    <>
      <Header />
      <Container id="Home">
        <EsteticIntro />
      </Container>
      <PurpleDiv id="Platforms">
        <AestheticsServices />
      </PurpleDiv>
      <Container id="Procedures">
        <Injectables />
      </Container>
      <Container>
        <Manuals />
      </Container>
      <Container id="Testimonials">
        <Testimonials />
      </Container>
      <About id="About"/>
      <Contact id="Contact"/>
      <Footer />
    </>
  )
}

export default VeranoEstetica