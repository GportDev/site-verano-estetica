import { ContentSection, Section, Card, Title, Text } from "../styles/styles"

function About() {
  return(
    <>
      <Section>
        <ContentSection>
          <Title>Sobre nós</Title>
          <Text align='justify' margin='2.6rem 0'>
            Fundada no final de 2019, a <strong color="#D465E7">Verano</strong> busca com seu nome trazer algo que traga a essência do verão para a estética, com cuidados que proporcionam beleza, bem estar e saúde para os clientes.
            Através de sua equipe capacitada, você verá a paixão em tudo que executam.<br/><br/>

            Estamos trazendo para nosso espaço de atendimento tudo que encontramos no mercado poderia ser ainda melhor. Desde o agendamento personalizado, ao ambiente, até os serviços disponíveis. Tudo foi pensado de uma forma cuidadosa para que os clientes sintam que a Verano se preocupa com o impacto e resultado que os nossos serviços causam em todos vocês.<br/><br/>

            Ao longo desses 2 anos estamos desenvolvendo um trabalho de excelência na estética. Onde a <strong>responsabilidade</strong> e <strong>segurança</strong> são levados a sério pela equipe.
            A cada nova etapa estaremos trazendo novos serviço com a mais alta tecnologia do mercado, agregando valor e qualidade aos nossos serviços.<br/><br/>

            Venha conhecer essas experiências únicas disponíveis em nosso espaço!
          </Text>
        </ContentSection>
        <Card>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora odit fugiat voluptate vel eaque. Voluptate similique repudiandae cum aut ut minima molestiae sequi commodi porro inventore consequuntur, obcaecati maiores. Sint?</Card>
      </Section>
    </>
  )
}

export default About