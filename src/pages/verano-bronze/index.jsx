import React from "react";
import Header from "../../components/header/index.jsx";
import TanIntro from "../../components/intro_bronze";
import OrangeDiv from "../../components/orange_div/index.jsx";
import About from "../../components/about/index.jsx";
import Contact from "../../components/contact/index.jsx";
import Footer from "../../components/footer/index.jsx";
import { Container, OrangeDivider1, OrangeDivider2 } from "../../components/styles/styles.js";
import Tretments from "../../components/tretments/index.jsx";
import Testimonials from "../../components/testimonials/index.jsx";


function VeranoBronze() {
  return (
    <>
      <Header orange/>
      <Container id="HomeBronze">
        <TanIntro />
      </Container>
      <OrangeDivider1 />
      <OrangeDiv id="Tretments">
        <Tretments />
      </OrangeDiv>
      <OrangeDivider2 />
      <Container id="Results">
        <Testimonials orange/>
      </Container>
      <OrangeDivider1 />
      <About id="AboutBronze" orange/>
      <OrangeDivider2 />
      <Contact id="ContactBronze" orange/>
      <Footer orange/>
    </>
  )
}

export default VeranoBronze