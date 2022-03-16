import { LogoVerano, Text } from "../styles/styles"
import { FooterBody, FooterWrapper, Icon, IconDiv } from "./styles"
import Logo from "../../assets/images/Logo Verano.png"
import Facebook from "../../assets/icons/facebook.png"
import Instagram from "../../assets/icons/instagram.png"

function Footer() {
  return(
    <FooterBody>
      <FooterWrapper>
        <LogoVerano src={Logo} height='3rem'/>
        <Text fontSize="1rem">2022 Verano Estética | Todos os direitos reservados<br/>Developed bt PortDev</Text>
        <IconDiv>
          <Icon src={Facebook}/>
          <Icon src={Instagram}/>
        </IconDiv>
      </FooterWrapper>
    </FooterBody>
  )
}

export default Footer