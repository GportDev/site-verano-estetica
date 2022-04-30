import Header from "../../../../components/header/index"
import Contact from "../../../../components/contact";
import Footer from "../../../../components/footer";
import { ButtonFilled, ContentSection, PurpleDivider1, Subtitle, Text, Title } from "../../../../components/styles/styles";
import { ListLine, PlatSection, BenefitsList, Equipment, ThirdTitle, Video, Container } from "../../styles";

import SopranoIce from "../../../../assets/images/Soprano/soprano.png"
import SopranoVideo from "../../../../assets/videos/soprano/soprano.mp4"
import WavesDiv from "../../../../components/waves_div";

function Soprano() {
  return(
    <>
      <Header/>
        <WavesDiv>
          <PlatSection className="content">
              <Title>Soprano Ice laser de diodo</Title>
            <Container>
              <ContentSection>
                <BenefitsList>
                  <ListLine><strong>Indolor</strong></ListLine>
                  <ListLine><strong>Não queima a pele</strong></ListLine>
                  <ListLine>Faça em qualquer época do ano</ListLine>
                  <ListLine>Maior eficácia na remoção dos pelos</ListLine>
                  <ListLine>Método com mais de 6 anos de eficácia clinicamente comprovada</ListLine>
                </BenefitsList>
              </ContentSection>
                <Equipment src={SopranoIce}/>
            </Container>
          </PlatSection>
          <PlatSection className="content">
            <ThirdTitle className="first">O que é?</ThirdTitle>
            <Text align="justify">
              Uma tecnologia a LASER indicada para remoção de pelos.<br/>
              Trata todos os fototipos de pele e peles bronzeadas removendo os pelos finos e claros. Possui vários comprimentos de onda emitidos simultaneamente, no modo varredura. O objetivo da tecnologia é atingir as três camadas: da papila, a raiz, até o bulbo capilar.<br/>
              O Soprano Ice de Diodo oferece uma solução simples para depilação de forma eficaz, inovadora e única.<br/>
              O tratamento de pelos com laser é eficiente, mas muitos mitos criados devem ser esclarecidos para que os resultados, embora muito bons, sejam realistas.<br/>
              Podemos esperar com a depilação a laser uma diminuição definitiva dos pelos, mudanças favoráveis das suas características, tornando a pilosidade mais fina e mais clara e com menor índice de complicações como infecções e irritação da pele.
            </Text>
            <ThirdTitle>Como funciona?</ThirdTitle>
            <Text align="justify">
            O método exclusivo do <strong>Soprano ice Laser de Diodo</strong> com a ponteira <strong>Speed™, 810nm, de safira resfriada à -3ºC</strong>, proporciona qualidade, segurança e conforto no tratamento. Prevenindo queimaduras e trazendo um tratamento praticamente indolor.<br/>
            No mercado atual os equipamentos utilizam o método HR: Modo tradicional de aplicação ponto a ponto.<br/>
            Com o Soprano você tem maior possibilidade em níveis de eficácia e cobertura com o método SHR™, além disso, pode ser aplicado em qualquer época do ano, sem risco de machucar ou manchar a pele.<br/><br/>
            <strong>Método SHR - Super Hair Removal</strong><br/>
            Tecnologia para remoção de pelos, que realiza fototermólise volumétrica. Posteriormente o procedimento é realizado com baixos níveis de energia, de forma contínua e em movimento, promovendo o aquecimento gradual do folículo piloso, que resulta em dano térmico de sua estrutura enquanto a pele é mantida em baixa temperatura independente da quantidade de melanina na pele.
            </Text>
            <ThirdTitle>Quantas sessões eu preciso fazer?</ThirdTitle>
            <Text align="justify" margin="0 0 4rem">
              As sessões variam de 6 a 12, dependendo do caso específico de cada cliente. Devendo ser feitos respeitando um intervalo ideial de 30 a 45 dias entre cada sessão.
            </Text>
            <ButtonFilled href="https://wa.me/5512981942768" target="blank" fontSize="1.5rem">Agende agora sua sessão</ButtonFilled>
          </PlatSection>
        </WavesDiv>
        <PlatSection className="content">
          <Subtitle margin="0 auto 2rem">Funcionamento do aparelho</Subtitle>
          <Video src={SopranoVideo} controls/>
        </PlatSection>
        <PurpleDivider1/>
        <Contact />
        <Footer />
    </>
  )
}

export default Soprano