import React from 'react';
import { Section, ContentSection, TanButtonFilled, TanTitle, TanText, InicialImage } from "../../pages/verano-bronze/styles.js";
import BronzeIntro from "../../assets/images/bronze/intro01.jpg"
 

function TanIntro() {
  return (
      <Section>
        <ContentSection>
          <TanTitle margin="0 auto">Sua pele bronzeada o ano todo!</TanTitle>
          <TanText margin="2.25rem 0">Aquela marquinha bem feita, natural e com todo cuidado que sua pele merece. Com a gente é assim, todo amor e carinho no cuidado da sua pele!</TanText>
          <TanButtonFilled href="https://wa.me/5512992301683" target="blank" fontSize="1.25rem">Agendar um horário</TanButtonFilled>
        </ContentSection>
        <ContentSection className="intro">
          <InicialImage src={BronzeIntro}/>
        </ContentSection>
      </Section>
  )
}

export default TanIntro