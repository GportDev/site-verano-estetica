import React from "react";
import Header from "../../components/header/index.jsx";
import TanIntro from "../../components/intro_bronze";
import WavesDiv from "../../components/waves_div/index.jsx";
import About from "../../components/about/index.jsx";
import Contact from "../../components/contact/index.jsx";
import Footer from "../../components/footer/index.jsx";
import Tretments from "../../components/tretments/index.jsx";
import Testimonials from "../../components/testimonials/index.jsx";
import { OrangeDivider1, OrangeDivider2 } from "../../components/styles/styles.js";


function VeranoBronze() {
  return (
    <>
      <Header orange/>

      <TanIntro />

      <OrangeDivider1 />

      <WavesDiv orange id="Tretments">
        <Tretments />
      </WavesDiv>

      <OrangeDivider2 />

      <Testimonials orange/>

      <OrangeDivider1 />

      <About id="AboutBronze" orange/>

      <OrangeDivider2 />

      <Contact id="ContactBronze" orange/>

      <Footer orange/>
    </>
  )
}

export default VeranoBronze