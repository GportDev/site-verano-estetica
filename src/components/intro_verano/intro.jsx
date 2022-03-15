import React from 'react';
import { Title, Text, ButtonFilled, ContentSection, Imagem } from "../styles/styles";
import Alanna from "../../assets/images/allana01.jpg"  

function EsteticIntro() {
  return (
      <>
        <ContentSection>
          <Title margin="">Estética avançada para realçar sua beleza</Title>
          <Text margin="2.25rem 0">Um espaço personalizado que conta diversos serviços de alta qualidade e segurança. Todos escolhidos a dedo para proporcionar há você uma experiência única e profissional.</Text>
          <ButtonFilled href="#">Agendar um horário</ButtonFilled>
        </ContentSection>
        <Imagem src={Alanna} />
      </>
  )
}

export default EsteticIntro