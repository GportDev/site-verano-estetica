import { ColumnSection, Text, Card, Subtitle, ButtonFilled} from "../styles/styles";
import { Swiper, MachineAvatar, NameTitle} from "./styles"
import Soprano from "../../assets/images/Soprano/Soprano-cut.png"
import Etherea from "../../assets/images/Etherea/Etherea.png"
import Ultraformer from "../../assets/images/Ultraformer/ultraformer-cut.png"
import Inkie from "../../assets/images/ND YAG/Inkie.png"

function AestheticsServices() {
  return(
    <ColumnSection>
      <Subtitle className="SectionTitle">Serviços e plataformas</Subtitle>
      <Text margin='4rem'>Com mais de 2 anos no mercado de estética, a Verano conquistou seus clientes com opções de tratamento exclusivas, sempre se preocupando com a saúde e bem estar do paciente.
      Dentre esses serviços temos:
      </Text>
      <Swiper className="services">

        <Card className="service">
          <Subtitle margin="0 0 4rem">Depilação a laser</Subtitle>
          <MachineAvatar src={Soprano}/>
          <NameTitle margin="4rem 0 1.5rem">Soprano Ice Laser de Diodo</NameTitle>
          <Text margin="0 0 1.5rem">
            Tecnologia de padrão OURO, com sessões indolores, podendo ser aplicado em todos fototipos de pele, até mesmo sobre a pele bronzeada.
          </Text>
          <ButtonFilled fontSize="1.5rem" href="#/verano-estetica/soprano">Saiba mais</ButtonFilled>
        </Card>

        <Card className="service">
          <Subtitle margin="0 0 4rem">Ultrassom estético</Subtitle>
          <MachineAvatar src={Ultraformer}/>
          <NameTitle margin="4rem 0 1.5rem">Ultraformer III</NameTitle>
          <Text margin="0 0 1.5rem">
            Ultrassom microfocado e macrofocado. Oferecendo ao paciente tratamentos faciais e corporais sem a necessidade de cirurgia.
            Além da recuperação de colágeno para regiões tratadas.
          </Text>
          <ButtonFilled fontSize="1.5rem" href="#/verano-estetica/ultraformer">Saiba mais</ButtonFilled>
        </Card>

        <Card className="service">
          <Subtitle margin="0 0 4rem">Plataforma multifuncional</Subtitle>
          <MachineAvatar src={Etherea}/>
          <NameTitle margin="4rem 0 1.5rem">Etherea MX</NameTitle>
          <Text margin="0 0 1.5rem">
            Plataforma que associa lasers de intensidade regulável com ponteiras especificas para diferentes tratamentos. Mais de 70 procedimentos podem ser realizados, desde lifting facial até a remoção de tatuagens coloridas.
          </Text>
          <ButtonFilled fontSize="1.5rem" href="#/verano-estetica/etherea">Saiba mais</ButtonFilled>
        </Card>

        <Card className="service">
          <Subtitle margin="0 0 4rem">Remoção de tatuagens e pigmentos</Subtitle>
          <MachineAvatar src={Inkie}/>
          <NameTitle margin="4rem 0 1.5rem">Inkie ND YAG Q switched</NameTitle>
          <Text margin="0 0 1.5rem">
            Peeling de Hollywood, blackpeel, tratamentos de melasma, remoção de tatuagem e muito mais!
          </Text>
          <ButtonFilled fontSize="1.5rem" href="#/verano-estetica/inkie">Saiba mais</ButtonFilled>
        </Card>
      </Swiper>
    </ColumnSection>
  )
}

export default AestheticsServices