import Header from "../../../../components/header/index"
import Contact from "../../../../components/contact";
import Footer from "../../../../components/footer";
import { Container, ContentSection } from "../../../../components/styles/styles";
import { ResultImg, TanButtonFilled, TanDiv, TanH3, TanList, TanListLine, TanSection, TanSubtitle, TanText} from "../../styles"
import Intro from "../../../../assets/images/bronze/banho_de_lua/abdomen.jpeg"
import Pernas from "../../../../assets/images/bronze/banho_de_lua/pernas.jpeg"
import Resultado1 from "../../../../assets/images/bronze/banho_de_lua/antebraço.jpeg"
import Resultado2 from "../../../../assets/images/bronze/banho_de_lua/braço1.jpeg"
import WavesDiv from "../../../../components/waves_div";

function Moon() {
  return(
    <>
      <Header orange/>
      <Container>
        <WavesDiv orange>
          <TanSection>
            <ContentSection>
              <TanSubtitle className="SectionTitle" margin="0 auto 8rem">Banho de lua</TanSubtitle>
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
            <TanButtonFilled fontSize="1.5rem">Agende agora sua sessão</TanButtonFilled>
            </ContentSection>
            <ResultImg src={Intro} className="intro"/>
          </TanSection>
          <TanSection className="">
            <TanSection className="content moon_bath">
              <TanH3 className="first">Como funciona?</TanH3>
              <TanText align="left">
                Esse procedimento é eficaz no clareamento da pele e também promove um relaxamento corporal, pois, durante a aplicação dos produtos, o profissional utiliza movimentos de massagem para proporcionar ainda mais conforto ao cliente.<br/><br/>
                O banho de lua é realizado em etapas importantes que englobam a descoloração dos pêlos, esfoliação, nutrição e hidratação.<br/><br/>
                Ele pode ser utilizado nas regiões dos braços, pernas, glúteos, costas e barriga
              </TanText>
              <TanH3>Duração</TanH3>
              <TanText align="left" margin="0 0 4rem">
                O tempo de duração média de aplicação é de uma hora e meia, duas horas e seu efeito dura o tempo do crescimento do pelo (aproximadamente 28 dias).
              </TanText>
              <TanButtonFilled fontSize="1.5rem">Agende agora sua sessão</TanButtonFilled>
            </TanSection>
            <TanDiv>
              <ResultImg src={Pernas} className="intro"/>
            </TanDiv>
          </TanSection>
        </WavesDiv>
        <TanSection className="images" margin="4rem auto 8rem">
          <TanSubtitle margin="0 auto 2rem" className="SectionTitle">Resultados</TanSubtitle>
          <TanDiv>
            <ResultImg src={Resultado1}/>
            <ResultImg src={Resultado2}/>
          </TanDiv>
        </TanSection>
        <Contact orange/>
        <Footer orange/>
      </Container>
    </>
  )
}

export default Moon