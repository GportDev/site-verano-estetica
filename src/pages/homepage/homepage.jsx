import React from "react";
import styled from "styled-components";
import Logo from "../../assets/images/Logo Verano.png"
import Alanna from "../../assets/images/allana01.jpg"

const HomeGradient = styled.section`
  height: 100%;
  padding: 2rem 0;
  background: linear-gradient(90deg, #D465E7 0%, #E2C9ED 37.5%, #F6E2D0 63.54%, #EB8A00 100%);
`

const Welcome = styled.section`
  margin: 0 auto;
  padding: 0 2.75rem;
  background: #f9f9f9;
  width: 36rem;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.35);
  border-radius: 1rem;
  text-align: center;
`

const LogoVerano = styled.img`
  width: 20rem;
  height: 9.14rem;
  margin-top: 2.25rem;
`

const Title = styled.h1`
  margin: 4rem 0 6rem;
  font-family: 'Poppins';
  font-weight: 500;
  font-style: normal;
  font-size: 3rem;
  line-height: 3rem;
  color: #23042F;
`

const ImagemInicial = styled.img`
  max-width: 30.62rem;
  margin-bottom: 3rem;
  border-radius: 1rem;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.35);
`

const Buttons = styled.nav`
  display: flex;
  justify-content: space-between;
`

const ButtonOutlined = styled.a`
  text-decoration: none;
  color: ${props => props.color || 'black'};
  margin: 0 0.5rem;
  background: none;
  padding: 0.75rem;
  width: 14rem;
  border: 2px solid #D465E7;
  box-sizing: border-box;
  border-radius: 0.5rem;
  font-family: DM Sans;
  font-size: 1.25rem;
  line-height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`
  
const Text = styled.p`
  display: inline-block;
  font-family: DM Sans;
  font-size: 1.125rem;
  line-height: 1.5rem;
  margin: 5rem 0 2rem;
`

function Homepage() {
  return(
    <main>
      <HomeGradient>
        <Welcome>
          <LogoVerano alt="Logo Verano estética avançada" src={Logo}/>
          <Title>
            Nossa missão é cuidar de você
          </Title>
          <ImagemInicial alt="Allana Diaz, CEO da Verano Estética segurando um aparelho de depilação a laser" src={Alanna}/>
          <Buttons>
            <ButtonOutlined href="/verano-estetica" color="#23042F">
              <span className="material-icons md-18 dark-purple">chevron_left</span>Verano estetica
            </ButtonOutlined>
            <ButtonOutlined href="/verano-bronze" color="#23042F">
              Verano bronze<span className="material-icons md-18 dark-purple">chevron_right</span>
            </ButtonOutlined>
          </Buttons>
          <Text>Verano Estética Avançada | Todos os direitos reservados <br /> Developed by GportDev</Text>
        </Welcome>
      </HomeGradient>
    </main>
  )
}

export default Homepage