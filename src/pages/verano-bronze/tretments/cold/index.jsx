import Header from "../../../../components/header/index"
import Contact from "../../../../components/contact";
import Footer from "../../../../components/footer";
import { Container, ContentSection } from "../../../../components/styles/styles";
import { ResultImg, TanButtonFilled, TanDiv, TanH3, TanSection, TanSubtitle, TanText} from "../../styles"
import Resultado1 from "../../../../assets/images/bronze/bronze-nat-resultado1.jpg"
import Resultado2 from "../../../../assets/images/bronze/bronze-nat-resultado2.jpg"
import Intro from "../../../../assets/images/bronze/bronze-nat-clip-intro.jpg"
import WavesDiv from "../../../../components/waves_div";

function Cold() {
  return(
    <>
      <Header orange/>
      <Container>
        <WavesDiv orange>
          <TanSection>
            <ContentSection>
              <TanSubtitle className="SectionTitle" margin="0 auto 2rem">Sem sol, também tem bronze</TanSubtitle>
              <TanText margin="0 0 2rem">
                Feito com a aplicação de produto 100% natural e orgânico! Contém vitaminas A e E, além de óleos essenciais para uma pele linda e hidratada.
            </TanText>
            <TanButtonFilled fontSize="1.5rem">Agende agora sua sessão</TanButtonFilled>
            </ContentSection>
            <ResultImg src={Intro} className="intro"/>
          </TanSection>
          <TanSection className="content">
            <TanH3 className="first">Como funciona?</TanH3>
            <TanText align="left">
              O “jet bronze” ou “bronzeamento gelado”, consiste em um produto autobronzeante é aplicado na pele através da técnica de bronzeamento a jato com o uso de uma pistola de ar conectada a um compressor portátil que pulverizam o produto de forma homogênea, obtendo-se um bronzeado uniforme e sem manchas.<br/><br/>
              O produto autobronzeante contém em sua formulação as substâncias Dihidroxiacetona (DHA) e Eritrulose que reagem com os aminoácidos da pele desenvolvendo a cor bronzeada dourada. A cor desejada inicia após três horas da aplicação do produto e se intensifica até a oitava hora.
              <br/><br/>
              Como a reação da DHA com os aminoácidos da pele é uma reação de açúcar, durante as sete horas da aplicação se desenvolve um odor levemente açucarado. Este ocorre com qualquer produto de mercado baseado no princípio do autobronzeamento com DHA.
              A reação ocorre na camada superficial da pele, e o bronzeado sai com a renovação celular e perda das células mortas. Dependendo do tipo de pele e dos cuidados pós-bronze, o tempo de permanência do bronzeado é variável, e pode durar até dez dias. Peles ressecadas descamam mais e tendem a perder mais rapidamente o bronzeado, uma pele hidratada mantém o bronzeado por mais tempo.
              <br/><br/>
              A cor da pele logo após a aplicação do produto é do corante hidrossolúvel e tem a função de marcar onde o produto foi aplicado, garantindo a visualização e uniformidade da aplicação pelo profissional. Este corante sai com água e sairá no primeiro banho após as sete horas da aplicação, ficando a cor do bronzeado da reação da pele com a DHA, que vai permanecer por sete a dez dias. Durante o primeiro banho, a água sairá corada (marrom), não se assuste, o bronze não está sendo removido pelo banho, mas sim o corante.
            </TanText>
            <TanH3>Duração</TanH3>
            <TanText align="left" margin="0 0 4rem">
              O produto atuará na pele durante as oito horas após a aplicação, por isso é fundamental não interferir na reação, evitando atividades que gerem suor ou atrito, banhos de chuveiro, mar ou piscina, que removem o produto da pele, interrompendo a reação. O bronzeado permanece na pele de 7 a 15 dias, dependendo dos cuidados
            </TanText>
            <TanButtonFilled fontSize="1.5rem">Agende agora sua sessão</TanButtonFilled>
          </TanSection>
        </WavesDiv>
        <TanSection className="images">
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

export default Cold