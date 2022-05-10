import Header from "../../../../components/header/index"
import WavesDiv from "../../../../components/waves_div";
import Contact from "../../../../components/contact";
import Footer from "../../../../components/footer";
import { ButtonFilled, ContentSection, PurpleDivider2, Text, Title  } from "../../../../components/styles/styles";
import { ListLine, PlatSection, BenefitsList, Equipment, ThirdTitle, Container, ListTitle } from "../../styles";

import EthereaPic from "../../../../assets/images/Etherea/Etherea.png"

function Etherea() {
  return(
    <>
      <Header/>
      <WavesDiv>
        <PlatSection className="content">
            <Title>Etherea MX</Title>
          <Container>
            <ContentSection>
              <ListTitle>Tratamentos</ListTitle>
              <BenefitsList>
                <ListLine>Estrias</ListLine>
                <ListLine>Melasmas</ListLine>
                <ListLine>Cicatrizes</ListLine>
                <ListLine>Acne ativas</ListLine>
                <ListLine>Lesões vasculares</ListLine>
                <ListLine>Fotoenvelhecimento</ListLine>
                <ListLine>Lesões pigmentadas</ListLine>
                <ListLine>Remoção de tatuagem</ListLine>
                <ListLine>Procedimentos faciais</ListLine>
                <ListLine>Tratamento íntimo feminino</ListLine>
                <ListLine>Além de + de 70 tratamentos</ListLine>
              </BenefitsList>
            </ContentSection>
              <Equipment src={EthereaPic} className="etherea"/>
          </Container>
        </PlatSection>
        <PlatSection className="content ultroformer">
          <ThirdTitle className="first">O que é?</ThirdTitle>
          <Text align="justify">
            Etherea MX é um aparelho de tratamentos a laser totalmente desenvolvido no Brasil. Ele conta com diversas handpieces (em português, são chamadas de ponteiras) que trabalham os feixes de luz de maneiras diferentes. Esta variedade permite ao Etherea ser capaz de realizar mais de 70 de tratamentos a laser.<br/><br/>
            As múltiplas possibilidades de intensidade e variações no espectro de luz, geram uma fácil adaptação aos procedimentos desejados, promovendo também uma maior segurança e eficiência nos resultados.<br/>
          </Text>
          <ThirdTitle>Como funciona?</ThirdTitle>
          <Text align="justify">
            Devido à sua versatilidade de handpieces, o Etherea MX realiza tratamentos de diferentes formas dentro das funções e modulação do espectro de luz e intensidade. Estes feixes são liberados de maneira uniforme, garantindo uma eficácia superior aos procedimentos.

            A plataforma pode penetrar a energia em locais com maior densidade de gordura e profundidade, com a mesma eficiência que trabalha em locais superficiais e com menor concentração de lipídios.

            Em uma análise geral, os procedimentos com o Etherea MX não geram um grande desconforto para o paciente. Contudo, cada pessoa tem uma sensibilidade diferente e, por isso, em alguns casos, o profissional responsável poderá optar pela administração de anestesia.
          </Text>
          <ThirdTitle>Indicações</ThirdTitle>
          <Text align="justify">
            O Etherea MX pode ter seus lasers utilizados para procedimentos como atenuação de rugas profundas, lifting facial, redução de cicatrizes, acne ativa, estrias e melasma (manchas escuras na pele).<br/><br/>

            Outro uso muito recorrente da plataforma é para a remoção de tatuagens. O Etherea MX consegue remover praticamente todos os tipos de pigmentações (exceto tatuagens com tons amarelos, que podem necessitar de avaliação para averiguar a viabilidade de remoção).<br/><br/>

            Para este tratamento, o Etherea MX detecta a pigmentação na derme e age somente sobre ela, preservando a pele ao redor da região. O tom de pele também não é um problema, pois o equipamento consegue realizar uma despigmentação tanto em peles claras, quanto peles em negras.<br/><br/>
          </Text>
          <ThirdTitle>Ponteiras disponíveis</ThirdTitle>
          <Text align="justify">
            <strong>DualMode</strong>: combina indicações de tratamentos ablativos e coagulativos em um mesmo disparo. É indicada para rugas finas, manchas de sol, melhora da textura da pele e tratamento intraoral com indicação para efeito lifting.<br/>
            Outra função desta ponteira é para tratamentos em mulheres na fase pós-menopausa, reduzindo a flacidez íntima e a incontinência urinária.<br/><br/>

            <strong>IPL-SQ</strong>: é uma ponteira de luz intensa pulsada (Intense Pulsed Light, em inglês) que alia eficácia de resultados à segurança, permitindo a realização de uma ampla variedade de tratamentos. É ideal para peles do tipo mista, a mais comum no Brasil.<br/>

            A ponteira IPL-SQ é indicada para depilação, rejuvenescimento, lesões pigmentares, lesões vasculares superficiais e tratamento de acne ativa.<br/><br/>

            <strong>ACROMA</strong>: essa ponteira trabalha com pulsos de baixa frequência para gerar rejuvenescimento não-ablativo (provedor de iluminação da camada mais superficial da pele), clareamento de melasmas e a remoção de tatuagens e micropigmentação de sobrancelhas definitivas.<br/>

            Quando utilizada para remoção de tatuagens, a Acroma consegue focar na pigmentação e poupar os tecidos sem coloração artificial, gerando maior segurança e eficiência para o tratamento.<br/>
          </Text>
          <ThirdTitle>Quantas sessões serão necessárias?</ThirdTitle>
          <Text align="justify" margin="0 0 4rem">
            Como já citado, o Etherea MX pode atuar em diversos tratamentos, e estes possuem uma complexidade que ao ser avaliada junto ao caso de cada paciente, necessitará de um número específico de sessões, que apenas um médico especialista poderá determinar.<br/><br/>

            Para o processo de recuperação vale a mesma regra, como cada paciente tem um objetivo e um procedimento que melhor se encaixa para atingir suas demandas, logo, o tempo de recuperação também apenas poderá ser definido após uma avaliação médica.<br/><br/>
          </Text>
          <ButtonFilled href="https://wa.me/5512981942768" target="blank" fontSize="1.25rem">Agende agora sua sessão</ButtonFilled>
        </PlatSection>
      </WavesDiv>
      <PurpleDivider2/>
      <Contact />
      <Footer />
    </>
  )
}

export default Etherea