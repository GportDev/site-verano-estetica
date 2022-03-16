import React from "react";
import { HomeGradient, Card, LogoVerano, Title, ImagemInicial, Buttons, ButtonOutlined, Text } from "../../components/styles/styles"
import Logo from "../../assets/images/Logo Verano.png"
import Alanna from "../../assets/images/allana01.jpg"

function Homepage() {
  return(
    <>
      <HomeGradient>
        <Card>
          <LogoVerano alt="Logo Verano estética avançada" src={Logo} widht='20rem' height='9.14rem' marginTop='2.25rem'/>
          <Title margin="4rem 0 6rem">
            Nossa missão é cuidar de você
          </Title>
          <ImagemInicial alt="Allana Diaz, CEO da Verano Estética segurando um aparelho de depilação a laser" src={Alanna}/>
          <Buttons>
            <ButtonOutlined href="#/verano-estetica" color="#23042F">
              <span className="material-icons md-18 dark-purple">chevron_left</span>Verano estetica
            </ButtonOutlined>
            <ButtonOutlined href="#/verano-bronze" color="#23042F">
              Verano bronze<span className="material-icons md-18 dark-purple">chevron_right</span>
            </ButtonOutlined>
          </Buttons>
          <Text margin="36px 0 2rem">Verano Estética Avançada | Todos os direitos reservados <br /> Developed by <a alt='Site do desenvolvedor desta página' src="#" target='blank'>PortDev</a></Text>
        </Card>
      </HomeGradient>
    </>
  )
}

export default Homepage