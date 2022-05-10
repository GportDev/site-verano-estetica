import { ColumnSection, SwiperDiv, Subtitle } from "../styles/styles";
import { MachineAvatar, NameTitle, Text, Card, CardButton, ContentDiv, SubtitleDiv, NameTitleDiv, ButtonDiv } from "./styles";
import Soprano from "../../assets/images/Soprano/Soprano-cut.png";
import Etherea from "../../assets/images/Etherea/Etherea.png";
import Ultraformer from "../../assets/images/Ultraformer/ultraformer-cut.png";
import Inkie from "../../assets/images/ND_YAG/Inkie.png";

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';


function AestheticsServices() {
  return(
    <ColumnSection margin="4rem auto 8rem" id="Platforms">
      <Subtitle margin="0 auto">Serviços e plataformas</Subtitle>
      <Text>Com mais de 2 anos no mercado de estética, a Verano conquistou seus clientes com opções de tratamento exclusivas, sempre se preocupando com a saúde e bem estar do paciente.
      Dentre esses serviços temos:
      </Text>

      <SwiperDiv>
        <Swiper id="purple"
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={20}
          navigation
          breakpoints={{
            600: {
              slidesPerView: 2,
              spaceBetween: 10
            },
            1000: {
              slidesPerView: 3,
              spaceBetween: 0,
            }
          }}
        >

          <SwiperSlide>
            <Card>
              <SubtitleDiv>
                <Subtitle className="platform">Depilação a laser
                </Subtitle>
              </SubtitleDiv>
              <MachineAvatar src={Soprano}/>
              <ContentDiv>
                <NameTitleDiv>
                  <NameTitle>Soprano Ice Laser de Diodo</NameTitle>
                </NameTitleDiv>
                <Text>
                  Tecnologia de padrão OURO, com sessões indolores, podendo ser aplicado em todos fototipos de pele, até mesmo sobre a pele bronzeada.
                </Text>
              </ContentDiv>
                <ButtonDiv>
                  <CardButton fontSize="1.5rem" href="#/verano-estetica/soprano">
                    Saiba mais
                  </CardButton>
                </ButtonDiv>
            </Card>
          </SwiperSlide>

          <SwiperSlide>
            <Card>
              <SubtitleDiv>
                <Subtitle className="platform">Ultrassom estético
                </Subtitle>
              </SubtitleDiv>
              <MachineAvatar src={Ultraformer}/>
              <ContentDiv>
                <NameTitleDiv>
                  <NameTitle>Ultraformer III</NameTitle>
                </NameTitleDiv>
                <Text>
                  Ultrassom microfocado e macrofocado. Oferecendo ao paciente tratamentos faciais e corporais sem a necessidade de cirurgia.
                  Além da recuperação de colágeno para regiões tratadas.
                </Text>
              </ContentDiv>
                <ButtonDiv>
                  <CardButton fontSize="1.5rem" href="#/verano-estetica/ultraformer" >Saiba mais
                  </CardButton>
                </ButtonDiv>
            </Card>
          </SwiperSlide>

          <SwiperSlide>
            <Card>
              <SubtitleDiv>
                <Subtitle className="platform">Plataforma multifuncional</Subtitle>
              </SubtitleDiv>
              <MachineAvatar src={Etherea}/>
              <ContentDiv>
                <NameTitleDiv>
                  <NameTitle>Etherea MX</NameTitle>
                </NameTitleDiv>
                <Text>
                  Plataforma que associa lasers de intensidade regulável com ponteiras especificas para diferentes tratamentos. Mais de 70 procedimentos podem ser realizados, desde lifting facial até a remoção de tatuagens coloridas.
                </Text>
              </ContentDiv>
                <ButtonDiv>
                  <CardButton fontSize="1.5rem" href="#/verano-estetica/etherea">
                    Saiba mais
                  </CardButton>
                </ButtonDiv>
            </Card>
          </SwiperSlide>

          <SwiperSlide>
            <Card>
              <SubtitleDiv>
                <Subtitle className="platform">Remoção de tatuagens e pigmentos</Subtitle>
              </SubtitleDiv>
              <MachineAvatar src={Inkie}/>
              <ContentDiv>
                <NameTitleDiv>
                  <NameTitle>Inkie ND YAG Q switched</NameTitle>
                </NameTitleDiv>
                <Text>
                  Peeling de Hollywood, blackpeel, tratamentos de melasma, remoção de tatuagem e muito mais!
                </Text>
              </ContentDiv>
                <ButtonDiv>
                  <CardButton fontSize="1.5rem" href="#/verano-estetica/inkie" className="platform">
                    Saiba mais
                  </CardButton>
                </ButtonDiv>
            </Card>
          </SwiperSlide>

        </Swiper>
      </SwiperDiv>
    </ColumnSection>
  )
}

export default AestheticsServices