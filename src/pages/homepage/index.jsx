import React from "react";
import { HomeGradient, HomeCard, Buttons, HomeLogo, HomeTitle, HomeImage, HomeButton, ChevronLeft, ChevronRight, HomeText } from "./styles"
import Logo from "../../assets/images/Logo Verano.png"
import Alanna from "../../assets/images/allana01.jpg"


function Homepage() {
  return(
    <>
      <HomeGradient>
        <HomeCard>
          <HomeLogo alt="Logo Verano estética avançada" src={Logo}/>
          <HomeTitle>
            Nossa missão é cuidar de você
          </HomeTitle>
          <HomeImage alt="Allana Diaz, CEO da Verano Estética segurando um aparelho de depilação a laser" src={Alanna}/>
          <Buttons>
            <HomeButton href="#/verano-estetica" color="#23042F">
              <ChevronLeft/>Verano Estética
            </HomeButton>
            <HomeButton href="#/verano-bronze" color="#23042F">
              Verano Bronze <ChevronRight />
            </HomeButton>
          </Buttons>
          <HomeText>Verano Estética Avançada | Todos os direitos reservados <br /> Developed by <a alt='Site do desenvolvedor desta página' src="#" target='blank'>PortDev</a></HomeText>
        </HomeCard>
      </HomeGradient>
    </>
  )
}

export default Homepage