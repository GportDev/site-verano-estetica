import { Card, CardImg, TanButtonFilled, TanSubtitle, TanText } from "../../pages/verano-bronze/styles"
import { ColumnSection, SwiperDiv } from "../styles/styles"

import NatTanCardImg from "../../assets/images/bronze/bronze-natural-card.png"
import MoonBathCardImg from "../../assets/images/bronze/banho-de-lua-card.png"
import ColdTanCardImg from "../../assets/images/bronze/gelado01.png"

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';

function Tretments() {
  return (
    <ColumnSection id="orangeProcedures">
      <TanSubtitle>Tratamentos</TanSubtitle>
      <TanText margin='3rem auto'>
        Pioneira no bronzeamento natural em São José dos Campos, a Verano Bronze conta com <strong>profissionais dedicadas, espaço aconchegante e experiência inesquecível!</strong>
        <br/><br/>
        Nossos tratamentos são:
      </TanText>
        <SwiperDiv>
          <Swiper id="orange"
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
                <TanSubtitle className="CardTitle" margin="0 0 2rem">Bronzeamento natural</TanSubtitle>
                <CardImg src={NatTanCardImg}/>
                <TanText margin="0 0 1.5rem">
                  Bronzeamento 100% natural, com <strong>luz do sol</strong> e produtos de primeita qualidade
                </TanText>
                <TanButtonFilled fontSize="1.5rem" href="#/verano-bronze/bronzeamento-natural">Saiba mais</TanButtonFilled>
              </Card>
            </SwiperSlide>

            <SwiperSlide>
              <Card>
                <TanSubtitle className="CardTitle" margin="0 0 2rem">Bronzeamento gelado</TanSubtitle>
                <CardImg src={ColdTanCardImg}/>
                <TanText margin="0 0 1.5rem">
                  Bronzeamento para qualquer época do ano, <strong>não precisa de luz solar.</strong>
                </TanText>
                <TanButtonFilled fontSize="1.5rem" href="#/verano-bronze/bronzeamento-gelado">Saiba mais</TanButtonFilled>
              </Card>
            </SwiperSlide>

            <SwiperSlide>
              <Card>
                <TanSubtitle className="CardTitle" margin="0 0 3rem">Banho de lua</TanSubtitle>
                <CardImg src={MoonBathCardImg}/>
                <TanText margin="0 0 1.5rem">
                  Clareamento de pelos do corpo todo.
                </TanText>
                <TanButtonFilled fontSize="1.5rem" href="#/verano-bronze/banho-de-lua">Saiba mais</TanButtonFilled>
              </Card>
            </SwiperSlide>

            <SwiperSlide>
              <Card>
                <TanSubtitle className="CardTitle" margin="0 0 2rem">Bronzeamento com máquina</TanSubtitle>
                <CardImg src={NatTanCardImg}/>
                <TanText margin="0 0 1.5rem">
                  Bronzeamento de máquina com produtos de altíssima qualidade
                </TanText>
                <TanButtonFilled fontSize="1.5rem" href="#/verano-bronze/bronzeamento-bronzejet">Saiba mais</TanButtonFilled>
              </Card>
            </SwiperSlide>

          </Swiper>
        </SwiperDiv>
    </ColumnSection>
  )
}

export default Tretments
