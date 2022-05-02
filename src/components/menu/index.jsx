import React from "react"
import { Logo, MenuContainer, Title, CTA, WPP, OutIcon } from "./styles"
import VeranoLogo from "../../assets/images/Logo Verano.png"
import UpWave from "../../assets/images/Background/Up-pink-wave.png"
import DownWave from "../../assets/images/Background/Down-pink-wave.png"
import OrangeUpWave from "../../assets/images/Background/Up-orange-wave.png"
import OrangeDownWave from "../../assets/images/Background/Down-orange-wave.png"
import { DownWaves, UpWaves } from "../waves_div/styles"

export default function SmallScreenMenu(props) {
  return(props.orange) ? (
    <MenuContainer>
      <a href="#/verano-bronze"><OutIcon/></a>
      <UpWaves src={OrangeUpWave}/>
      <Logo src={VeranoLogo}/>
      <Title color="var(--Text-orange)">
        Venha cuidar do seu bronze com a gente!
      </Title>
      <CTA href="https://wa.me/5512992301683" target="blank" color="var(--Strong-orange)">
        <WPP/>Agendar horário
      </CTA>
      <DownWaves src={OrangeDownWave}/>
    </MenuContainer>
  ) : (
    <MenuContainer>
      <a href="#/verano-estetica"><OutIcon/></a>
      <UpWaves src={UpWave}/>
      <Logo src={VeranoLogo}/>
      <Title color="var(--Medium-purple)">
        Venha cuidar da sua estética com a gente!
      </Title>
      <CTA href="https://wa.me/+5512981942768" target="blanck" color="var(--Principal-purple)">
        <WPP/>Agendar horário
      </CTA>
      <DownWaves src={DownWave}/>
    </MenuContainer>
  )

}