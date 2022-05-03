import Header from "../../../../components/header/index"
import Contact from "../../../../components/contact";
import Footer from "../../../../components/footer";
import {  ContentSection, OrangeDivider1, OrangeDivider2 } from "../../../../components/styles/styles";
import { Container, ResultImg, TanButtonFilled, TanDiv, TanH3, TanList, TanListLine, TanSection, TanSubtitle, TanText, TanTitle} from "../../styles"

import Intro from "../../../../assets/images/bronze/banho_de_lua/abdomen.jpeg"
import Pernas from "../../../../assets/images/bronze/banho_de_lua/pernas.png"
import Resultado1 from "../../../../assets/images/bronze/banho_de_lua/antebraço.jpeg"
import Resultado2 from "../../../../assets/images/bronze/banho_de_lua/braço1.jpeg"
import WavesDiv from "../../../../components/waves_div";

function Moon() {
  return(
    <>
      <Header orange/>

        <WavesDiv orange>

          <TanSection className="content" margin="2rem auto 4rem">
                <TanTitle margin="2rem auto">Banho de lua</TanTitle>
            <Container>
              <ContentSection>
                <TanText margin="0 0 2rem">
                  O Banho de Lua é uma técnica que consiste em clarear os pelos do corpo, seja por estética, para disfarça-los, ou até para destacar o bronzeado, além de ficar com a pele macia e hidratada. <br/>
                  O banho de lua é indicado para:
                </TanText>

                <TanList>
                  <TanListLine>Clarear os pelos</TanListLine>
                  <TanListLine>Remover as células mortas</TanListLine>
                  <TanListLine>Proporcionar suavidade e relaxamento na pele</TanListLine>
                  <TanListLine>Limpar, hidratar e nutrir produnfamente a pele</TanListLine>
                </TanList>
                <TanButtonFilled href="https://wa.me/5512992301683" target="blank" fontSize="1.5rem">Agende agora sua sessão</TanButtonFilled>
              </ContentSection>
              <ResultImg src={Intro} />
            </Container>
          </TanSection>

          <TanSection className="">
            <Container>
              <ContentSection>
                <TanH3 className="first section">Como funciona?</TanH3>
                <TanText align="Justify">
                  Esse procedimento é eficaz no clareamento da pele e também promove um relaxamento corporal, pois, durante a aplicação dos produtos, o profissional utiliza movimentos de massagem para proporcionar ainda mais conforto ao cliente.<br/><br/>
                  O banho de lua é realizado em etapas importantes que englobam a descoloração dos pêlos, esfoliação, nutrição e hidratação.<br/><br/>
                  Ele pode ser utilizado nas regiões dos braços, pernas, glúteos, costas e barriga
                </TanText>
                <TanH3 className="section">Duração</TanH3>
                <TanText align="justify" margin="0 0 4rem">
                  O tempo de duração média de aplicação é de uma hora e meia, duas horas e seu efeito dura o tempo do crescimento do pelo (aproximadamente 28 dias).
                </TanText>
                <TanButtonFilled href="https://wa.me/5512992301683" target="blank" fontSize="1.5rem">Agende agora sua sessão</TanButtonFilled>
              </ContentSection>
                <ResultImg src={Pernas}/>
            </Container>
          </TanSection>
        </WavesDiv>
        <OrangeDivider2 />
        <TanSection className="images" margin="4rem auto 8rem">
          <TanSubtitle margin="0 auto 2rem" className="SectionTitle">Resultados</TanSubtitle>
          <TanDiv>
            <ResultImg src={Resultado1}/>
            <ResultImg src={Resultado2}/>
          </TanDiv>
        </TanSection>
        <OrangeDivider1 />
        <Contact orange/>
        <Footer orange/>
    </>
  )
}

export default Moon