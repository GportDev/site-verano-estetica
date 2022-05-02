import React from 'react';
import { Title, Text, ButtonFilled, ContentSection, Section } from "../../../components/styles/styles";
import Alanna from "../../../assets/images/allana01.jpg"  
import { InicialImage } from "../../verano-bronze/styles"

function EsteticIntro() {
  return (
      <Section padding="0 2rem">
        <ContentSection>
          <Title>Estética avançada para realçar sua beleza</Title>
          <Text margin="2.25rem 0">Um espaço personalizado que conta diversos serviços de alta qualidade e segurança. Todos escolhidos a dedo para proporcionar há você uma experiência única e profissional.</Text>
          <ButtonFilled href="#">Agendar um horário</ButtonFilled>
        </ContentSection>
        <ContentSection>
          <InicialImage src={Alanna} />
        </ContentSection>
      </Section>
  )
}

export default EsteticIntro