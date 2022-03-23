import Header from "../../../../components/header/index"
import PurpleDiv from "../../../../components/purple_div";
import Contact from "../../../../components/contact";
import Footer from "../../../../components/footer";
import { ButtonFilled, Container, ContentSection, Subtitle, Text  } from "../../../../components/styles/styles";
import { ListLine, PlatSection, BenefitsList, Equipment, ThirdTitle, ImgDiv, Picture } from "../../styles";
import InkiePic from "../../../../assets/images/ND_YAG/inkie.png"
import Tratamento1 from "../../../../assets/images/ND_YAG/tatoo.jpeg"
import Tratamento2 from "../../../../assets/images/ND_YAG/sobrancelha.jpeg"


function Inkie() {
  return(
    <>
      <Header/>
      <Container>
        <PurpleDiv>
          <PlatSection>
            <ContentSection>
              <Subtitle>Inkie ND YAG Q Switched</Subtitle>
              <BenefitsList>
                <ListLine>Blackpeel</ListLine>
                <ListLine>Rejuvenescimento</ListLine>
                <ListLine>Peeling de Hollywood</ListLine>
                <ListLine>Clareamento de olheiras</ListLine>
                <ListLine>Tratamento de onicomicose nas unhas</ListLine>
                <ListLine>Tratamento para melasma e lesões pigmentares</ListLine>
                <ListLine>Remoção de tatuagens e micropigmentação (sobrancelhas e lábios)</ListLine>
              </BenefitsList>
            </ContentSection>
              <Equipment src={InkiePic} className="inkie"/>
          </PlatSection>
          <PlatSection className="content">
            <ThirdTitle className="first">O que é?</ThirdTitle>
            <Text align="left">
              É uma tecnologia para diversos tratamentos que utiliza uma emissão de energia luminosa com comprimento de onda de <strong>532nm e 1064nm</strong>, atingindo cores quentes e frias, sendo mais eficaz e oferecendo maior segurança e conforto ao paciente sem danificar os vasos adjacentes.
            </Text>
            <ThirdTitle>Como funciona?</ThirdTitle>
            <Text align="left">
              O Q-Switched ND Yag é um laser que trabalha com curtíssimos pulsos de energia, atuando diretamente no pigmento. Sendo assim, não danifica e não prejudica as áreas próximas à região tratada.<br/>
              A tecnologia é supereficiente, pois os pigmentos absorvem a luz emitida por esse laser e fragmentam-se em micropartículas que, por sua vez, serão eliminadas aos poucos pelo sistema linfático do paciente.<br/>
              Nesse sentido, muitos pacientes relataram que já conseguiram ver os resultados de remoção de tatuagem logo nas primeiras sessões.<br/><br/>

              O comprimento de 532nm é utilizado em pigmentos vermelhos, rosas, roxos e marrons, além dos tons mais claros. Já o de 1064nm é usado para pigmentos azuis, pretos e outros tons escuros.<br/><br/>

              Além de ser indicado para remoção de micropigmentações, tatuagens e manchas, o laser Nd-YAG Q-Switched pode ajudar a tratar o envelhecimento de colo e pescoço, combater rugas e linhas profundas, melhorar a flacidez facial, clarear axilas e virilhas escurecidas além deamenizar olheiras escuras.
            </Text>
            <ThirdTitle>Quantas sessões eu preciso fazer?</ThirdTitle>
            <Text align="left" margin="0 0 4rem">
              As sessões variam de 6 a 12, dependendo do caso específico de cada cliente. Devendo ser feitos respeitando um intervalo ideial de 30 a 45 dias entre cada sessão.
            </Text>
            <ButtonFilled  fontSize="1.25rem">Agende agora sua sessão</ButtonFilled>
          </PlatSection>
        </PurpleDiv>
        <PlatSection className="content">
          <Subtitle margin="0 auto 2rem">Antes e depois</Subtitle>
          <Container  className="image">
            <ImgDiv>
              <Picture src={Tratamento1}/>
              <Text margin="1rem 0">Remoção de tatuagem</Text>
            </ImgDiv>
            <ImgDiv>
              <Picture src={Tratamento2} />
              <Text margin="1rem 0">Remoção de micropigmentação</Text>
            </ImgDiv>
          </Container>
        </PlatSection>
        <Contact />
        <Footer />
      </Container>
    </>
  )
}

export default Inkie