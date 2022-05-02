import { ContentSection, Section, Card, Subtitle, Text, ColumnSection } from "../styles/styles"
import { TanSubtitle, TanText } from "../../pages/verano-bronze/styles"
import WavesDiv from "../waves_div";

function About(props) {
  return (props.orange) ? (
    <>
      <WavesDiv orange>
        <ColumnSection>
          <TanSubtitle className="SectionTitle">Sobre nós</TanSubtitle>
          <TanText align='justify' margin='2.6rem 0'>
            Fundada no final de 2019, a <strong color="#D465E7">Verano</strong> busca com seu nome trazer algo que traga a essência do verão para a estética, com cuidados que proporcionam beleza, bem estar e saúde para os clientes.
            Através de sua equipe capacitada, você verá a paixão em tudo que executam.<br/><br/>

            Estamos trazendo para nosso espaço de atendimento tudo que encontramos no mercado que poderia ser ainda melhor. Desde o agendamento personalizado, o ambiente, até os serviços disponíveis. Tudo foi pensado de forma cuidadosa para que os clientes sintam que a Verano se preocupa com o impacto e resultado que os nossos serviços causam em todos vocês.<br/><br/>

            Ao longo desses 2 anos estamos desenvolvendo um trabalho de excelência na estética. Onde a <strong>responsabilidade</strong> e <strong>segurança</strong> são levados a sério pela equipe.
            A cada nova etapa estaremos trazendo novos serviços com a mais alta tecnologia do mercado, agregando valor e qualidade aos nossos serviços.<br/><br/>

            Venha conhecer essas experiências únicas disponíveis em nosso espaço!
          </TanText>
        </ColumnSection>
      </WavesDiv>
    </>
  ) : (
    <>
      <WavesDiv>
        <ColumnSection>
            <Subtitle className="SectionTitle">Sobre nós</Subtitle>
            <Text align='justify' margin='2.6rem 0'>
              Fundada no final de 2019, a <strong color="#D465E7">Verano</strong> busca com seu nome trazer algo que traga a essência do verão para a estética, com cuidados que proporcionam beleza, bem estar e saúde para os clientes.
              Através de sua equipe capacitada, você verá a paixão em tudo que executam.<br/><br/>
              Estamos trazendo para nosso espaço de atendimento tudo que encontramos no mercado que poderia ser ainda melhor. Desde o agendamento personalizado, o ambiente, até os serviços disponíveis. Tudo foi pensado de forma cuidadosa para que os clientes sintam que a Verano se preocupa com o impacto e resultado que os nossos serviços causam em todos vocês.<br/><br/>
              Ao longo desses 2 anos estamos desenvolvendo um trabalho de excelência na estética. Onde a <strong>responsabilidade</strong> e <strong>segurança</strong> são levados a sério pela equipe.
              A cada nova etapa estaremos trazendo novos serviços com a mais alta tecnologia do mercado, agregando valor e qualidade aos nossos serviços.<br/><br/>
              Venha conhecer essas experiências únicas disponíveis em nosso espaço!
            </Text>
        </ColumnSection>
      </WavesDiv>
    </>
  );
}

export default About