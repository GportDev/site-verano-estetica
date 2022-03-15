import React from "react"
import PurpleSection from "../../components/purple_section/index.jsx";
import Header from "../../components/header/header.jsx";
import EsteticIntro from "../../components/intro_verano/intro.jsx";
import WhiteSection from "../../components/white_section/index.jsx";
import AestheticsServices from "../../components/services/index.jsx";
import Testimonials from "../../components/testimonials/index.jsx";
import About from "../../components/about/index.jsx";
import Contact from "../../components/contact/index.jsx";

function VeranoEstetica() {
  return (
    <>
      <Header />
      <WhiteSection>
        <EsteticIntro />
      </WhiteSection>
      <PurpleSection>
        <AestheticsServices />
      </PurpleSection>
      <WhiteSection>
        <Testimonials />
      </WhiteSection>
      <About />
      <Contact />
    </>
  )
}

export default VeranoEstetica