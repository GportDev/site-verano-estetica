import { ColumnSection, SwiperDiv, Text, Card, Subtitle, ButtonFilled} from "../styles/styles";
import { MachineAvatar, NameTitle} from "./styles";
import Soprano from "../../assets/images/Soprano/Soprano-cut.png";
import Etherea from "../../assets/images/Etherea/Etherea.png";
import Ultraformer from "../../assets/images/Ultraformer/ultraformer-cut.png";
import Inkie from "../../assets/images/ND_YAG/Inkie.png";

import { EffectCards, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';


function AestheticsServices() {
  return(
    <ColumnSection margin="4rem auto 8rem">
      <Subtitle className="SectionTitle">Serviços e plataformas</Subtitle>
      <Text margin='4rem'>Com mais de 2 anos no mercado de estética, a Verano conquistou seus clientes com opções de tratamento exclusivas, sempre se preocupando com a saúde e bem estar do paciente.
      Dentre esses serviços temos:
      </Text>
      <SwiperDiv>
        <Swiper
          modules={[Navigation, EffectCards]}
          spaceBetween={-35}
          slidesPerView={3}
          navigation
        >
          <SwiperSlide>
            <Card className="service">
              <Subtitle margin="0 0 2rem" className="platform">Depilação a laser</Subtitle>
              <MachineAvatar src={Soprano}/>
              <NameTitle margin="2rem 0">Soprano Ice Laser de Diodo</NameTitle>
              <Text margin="0 0 1.5rem">
                Tecnologia de padrão OURO, com sessões indolores, podendo ser aplicado em todos fototipos de pele, até mesmo sobre a pele bronzeada.
              </Text>
              <ButtonFilled fontSize="1.5rem" href="#/verano-estetica/soprano" className="platform">Saiba mais</ButtonFilled>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="service">
              <Subtitle margin="0 0 2rem" className="platform">Ultrassom estético</Subtitle>
              <MachineAvatar src={Ultraformer}/>
              <NameTitle margin="2rem 0">Ultraformer III</NameTitle>
              <Text margin="0 0 1.5rem">
                Ultrassom microfocado e macrofocado. Oferecendo ao paciente tratamentos faciais e corporais sem a necessidade de cirurgia.
                Além da recuperação de colágeno para regiões tratadas.
              </Text>
              <ButtonFilled fontSize="1.5rem" href="#/verano-estetica/ultraformer" className="platform">Saiba mais</ButtonFilled>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="service">
              <Subtitle margin="0 0 2rem" className="platform">Plataforma multifuncional</Subtitle>
              <MachineAvatar src={Etherea}/>
              <NameTitle margin="2rem 0">Etherea MX</NameTitle>
              <Text margin="0 0 1.5rem">
                Plataforma que associa lasers de intensidade regulável com ponteiras especificas para diferentes tratamentos. Mais de 70 procedimentos podem ser realizados, desde lifting facial até a remoção de tatuagens coloridas.
              </Text>
              <ButtonFilled fontSize="1.5rem" href="#/verano-estetica/etherea" className="platform">Saiba mais</ButtonFilled>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="service">
              <Subtitle margin="0 0 2rem" className="platform">Remoção de tatuagens e pigmentos</Subtitle>
              <MachineAvatar src={Inkie}/>
              <NameTitle margin="2rem 0">Inkie ND YAG Q switched</NameTitle>
              <Text margin="0 0 1.5rem">
                Peeling de Hollywood, blackpeel, tratamentos de melasma, remoção de tatuagem e muito mais!
              </Text>
              <ButtonFilled fontSize="1.5rem" href="#/verano-estetica/inkie" className="platform">Saiba mais</ButtonFilled>
            </Card>
          </SwiperSlide>
        </Swiper>
      </SwiperDiv>
    </ColumnSection>
  )
}

export default AestheticsServices