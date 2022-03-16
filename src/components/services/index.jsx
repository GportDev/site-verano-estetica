import { ColumnSection, Title, Text, Card, Swiper} from "../styles/styles";

function AestheticsServices() {
  return(
    <ColumnSection>
      <Title position='relative'>Serviços</Title>
      <Text margin='4rem' position='relative'>Com mais de 2 anos no mercado de estética, a Verano conquistou seus clientes com opções de tratamento exclusivas, sempre se preocupando com a saúde e bem estar do paciente.
      Dentre esses serviços temos:
      </Text>
      <Swiper>
        <Card width="26rem" padding="2.5rem">
          
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt explicabo vel vitae quia voluptatum, consectetur asperiores facilis inventore laboriosam, veniam at beatae quas ab! Illo nam possimus perspiciatis eveniet vero.
        </Text>
        </Card>
      </Swiper>
    </ColumnSection>
  )
}

export default AestheticsServices