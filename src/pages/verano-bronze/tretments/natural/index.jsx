import Header from "../../../../components/header/index"
import OrangeDiv from "../../../../components/orange_div";
import Contact from "../../../../components/contact";
import Footer from "../../../../components/footer";
import { Container, ContentSection } from "../../../../components/styles/styles";
import { ResultImg, TanButtonFilled, TanDiv, TanH3, TanList, TanListLine, TanSection, TanSubtitle, TanText} from "../../styles"
import Resultado1 from "../../../../assets/images/bronze/bronze-nat-resultado1.jpg"
import Resultado2 from "../../../../assets/images/bronze/bronze-nat-resultado2.jpg"
import Intro from "../../../../assets/images/bronze/bronze-nat-clip-intro.jpg"

function Natural() {
  return(
    <>
      <Header orange/>
      <Container>
        <OrangeDiv>
          <TanSection margin="4rem auto 8rem">
            <ContentSection>
              <TanSubtitle className="SectionTitle" margin="0 auto 2rem">Se tem sol, tem bronze</TanSubtitle>
              <TanText margin="0 0 2rem">
                Hoje em dia, as joseenses também conseguem o bronzeado perfeito sem sair da cidade e, o melhor de tudo: é natural!
                O bronzeamento consiste em ficar exposta ao sol durante certo período de tempo. <br/><br/>
                Parece simples, mas o bronze e a marca perfeita são possíveis graças aos produtos certos, a posição correta e o estudo dos índices de UVA e UVB que proporcionam um bronzeado duradouro, uniforme e saudável.
            </TanText>
            <TanButtonFilled fontSize="1.5rem">Agende agora sua sessão</TanButtonFilled>
            </ContentSection>
            <ResultImg src={Intro} className="intro"/>
          </TanSection>
          <TanSection className="content">
            <TanH3 className="first">Como funciona?</TanH3>
            <TanText align="left">
              Como cada tipo de pele exige um tratamento especial, temos produtos diferentes que reagem a luz solar, bronzeando e tratando sua pele.<br/><br/>

              O tempo de exposição é cronometrado para cada tipo de pele, visando sua saúde e conforto.<br/><br/>

              É uma experiência única, esse é o seu momento de cuidar da pele, fugir da correria do dia a dia num ambiente pensado especialmente para você.<br/>
            </TanText>
            <TanH3>Benefícios</TanH3>
            <TanList>
              <TanListLine>Relaxamento</TanListLine>
              <TanListLine>Efeitos estéticos</TanListLine>
              <TanListLine>Aumento da libído</TanListLine>
              <TanListLine>Menores dores musculares</TanListLine>
              <TanListLine>Diminuição de fungos e bactérias</TanListLine>
              <TanListLine>Estimulação da vitamina D, importante para a fixação do cálcio nos ossos</TanListLine>
              <TanListLine>Produção de serotonina, para aumento da autoestima e diminuição da depressão</TanListLine>
            </TanList>
            <TanButtonFilled fontSize="1.5rem">Agende agora sua sessão</TanButtonFilled>
          </TanSection>
        </OrangeDiv>
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

export default Natural