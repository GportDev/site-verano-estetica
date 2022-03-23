import React from 'react';
import { ContentSection, Section } from "../styles/styles";
import { TanButtonFilled, TanTitle, TanText, EmptyImg } from "../../pages/verano-bronze/styles.js";
 

function TanIntro() {
  return (
      <Section>
        <ContentSection>
          <TanTitle margin="">Sua pele bronzeada o ano todo!</TanTitle>
          <TanText margin="2.25rem 0">Aquela marquinha bem feita, natural e com todo cuidado que sua pele merece. Com a gente é assim, todo amor e carinho no cuidado da sua pele!</TanText>
          <TanButtonFilled href="#" fontSize="1.25rem">Agendar um horário</TanButtonFilled>
        </ContentSection>
        <EmptyImg />
      </Section>
  )
}

export default TanIntro