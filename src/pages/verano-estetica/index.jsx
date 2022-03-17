import React from "react"
import PurpleSection from "../../components/purple_section/index.jsx";
import Header from "../../components/header/index.jsx";
import EsteticIntro from "../../components/intro_verano/index.jsx";
import WhiteSection from "../../components/white_section/index.jsx";
import AestheticsServices from "../../components/services/index.jsx";
import Testimonials from "../../components/testimonials/index.jsx";
import About from "../../components/about/index.jsx";
import Contact from "../../components/contact/index.jsx";
import Injectables from "../../components/other_services/injectables/index";
import Manuals from "../../components/other_services/manuals/index";
import Footer from "../../components/footer/index.jsx";

function VeranoEstetica() {
  return (
    <>
      <Header />
      <WhiteSection id="Home">
        <EsteticIntro />
      </WhiteSection>
      <PurpleSection id="Platforms">
        <AestheticsServices />
      </PurpleSection>
      <WhiteSection id="Produres">
        <Injectables />
      </WhiteSection>
      <WhiteSection>
        <Manuals />
      </WhiteSection>
      <WhiteSection id="Testimonials">
        <Testimonials />
      </WhiteSection>
      <About id="About"/>
      <Contact id="Contact"/>
      <Footer />
    </>
  )
}

export default VeranoEstetica