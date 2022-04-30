import Header from "../../../../components/header/index";
import Contact from "../../../../components/contact";
import Footer from "../../../../components/footer";
import { ButtonFilled, Container, ContentSection, Subtitle, Text  } from "../../../../components/styles/styles";
import { ListLine, PlatSection, BenefitsList, Equipment, ThirdTitle, ImgDiv, Picture, UltraList } from "../../styles";
import UltraformerIII from "../../../../assets/images/Ultraformer/ULTRAFORMER3 1.png"
import Papada from "../../../../assets/images/Ultraformer/papada.jpeg"
import Tratamento from "../../../../assets/images/Ultraformer/equipamento.jpeg"
import WavesDiv from "../../../../components/waves_div";

function Ultraformer() {
  return(
    <>
      <Header/>
      <Container>
        <WavesDiv>
          <PlatSection>
            <ContentSection>
              <Subtitle>Ultraformer III</Subtitle>
              <BenefitsList>
                <ListLine><strong>Tira flacidez</strong></ListLine>
                <ListLine><strong>Efeito lifting</strong> imediato</ListLine>
                <ListLine>Efeito <strong>lipo sem cirurgia</strong></ListLine>
                <ListLine>Melhora a espessura da pele na hora</ListLine>
              </BenefitsList>
            </ContentSection>
              <Equipment src={UltraformerIII} className="ultraformer"/>
          </PlatSection>
          <PlatSection className="content ultroformer">
            <ThirdTitle className="first">O que é?</ThirdTitle>
            <Text align="left">
              Equipamente dedicado ao uso de ondas ultrassônicas para tratamento de estética. Com sua tecnologia avançada o Ultraformer III pode trabalhar na área do rosto com seus transdutores microfocados e em todo corpo com seus transdutores macrofocados.<br/>
              Através dele podemos fazer tratamentos de estética para rejuvenecer seu rosto até tratamentos com o mesmo efeito de lipoaspiração, tudo sem precisar de cirugia e com todo o conforto da nossa clínica.<br/>
            </Text>
            <ThirdTitle>Como funciona?</ThirdTitle>
            <Text align="left">
              <strong>Transdutor microfocado (Faciais)</strong>: Ponteira que foca a energia do aparelho, nas opções 1.5mm, 2.0mm, 3.0mm e 4.5mm são especializados no tratamento facil, entregando energia de ultrassom nas camadas do músculo aponeurótico superficial (SMAS) da face, estimuladno a remodelação do colágeno.

              <strong>Transdutores macrofocados (Corporais)</strong>: Atingem 8x mais volume que os microfocados, suas ponteiras variam nas opções de 6.0mm, 9.0mm e 13mm, entregando energia de ultrassom de forma uniforme no tecido subcutáneo, destruindo células de gordura, propocianando sua eliminação natural pelo corpo. <strong>EFEITO LIPO SEM CIRUGIA</strong>.
            </Text>
            <ThirdTitle>Benefícios</ThirdTitle>
            <UltraList>
              <BenefitsList>
                <ListLine>Efeito lifting imediato</ListLine>
                <ListLine>Redução da papada</ListLine>
                <ListLine>Rejuvenescimento íntimo</ListLine>
                <ListLine>Tratamento de linhas finas</ListLine>
                <ListLine>Melhora do contorno mandibular</ListLine>
                <ListLine>Tratamento de flacidez pós-parto</ListLine>
                <ListLine>Remodelamento do contorno corporal</ListLine>
                <ListLine>Melhora da flacidez de pescoço e colo</ListLine>
                <ListLine>Redução de gordura localizada e fllacidez</ListLine>
                <ListLine>Pele visivelmente mais firme após a sessão</ListLine>
              </BenefitsList>
            </UltraList>
            <ButtonFilled  fontSize="1.25rem">Agende agora sua sessão</ButtonFilled>
          </PlatSection>
        </WavesDiv>
        <PlatSection className="content">
          <Subtitle margin="0 auto 2rem">Antes e depois</Subtitle>
          <Container  className="image">
            <ImgDiv>
              <Picture src={Papada}/>
              <Text margin="1rem 0">Redução da papada</Text>
            </ImgDiv>
            <ImgDiv>
              <Picture src={Tratamento}/>
              <Text margin="1rem 0">Rejuvenescimento</Text>
            </ImgDiv>
          </Container>
        </PlatSection>
        <Contact />
        <Footer />
      </Container>
    </>
  )
}

export default Ultraformer