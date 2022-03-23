import React from "react";
import Header from "../../components/header/index.jsx";
import TanIntro from "../../components/intro_bronze";
import OrangeDiv from "../../components/orange_div/index.jsx";
import About from "../../components/about/index.jsx";
import Contact from "../../components/contact/index.jsx";
import Footer from "../../components/footer/index.jsx";
import { Container } from "../../components/styles/styles.js";
import Tretments from "../../components/tretments/index.jsx";
import Testimonials from "../../components/testimonials/index.jsx";

function VeranoBronze() {
  return (
    <>
      <Header orange/>
      <Container id="HomeBronze">
        <TanIntro />
      </Container>
      <OrangeDiv id="Tretments">
        <Tretments />
      </OrangeDiv>
      <Container id="Results">
        <Testimonials orange/>
      </Container>
      <About id="AboutBronze" orange/>
      <Contact id="ContactBronze" orange/>
      <Footer orange/>
    </>
  )
}

export default VeranoBronze