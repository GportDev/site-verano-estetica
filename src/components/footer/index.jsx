import { LogoVerano, Text } from "../styles/styles"
import { FooterBody, FooterWrapper, Icon, IconDiv } from "./styles"
import Logo from "../../assets/images/Logo Verano.png"
import Facebook from "../../assets/icons/facebook.svg"
import Instagram from "../../assets/icons/instagram.svg"

function Footer(props) {
  return(props.orange) ? (
    <FooterBody className="orange">
      <FooterWrapper>
        <LogoVerano src={Logo} height='3rem'/>
        <Text fontSize="1rem">2022 Verano Estética | Todos os direitos reservados<br/>Developed bt PortDev</Text>
        <IconDiv>
          <a href="#"><Icon src={Facebook}/></a>
          <a href="#"><Icon src={Instagram}/></a>
        </IconDiv>
      </FooterWrapper>
    </FooterBody>
  ) : (
    <FooterBody>
      <FooterWrapper>
        <LogoVerano src={Logo} height='3rem'/>
        <Text fontSize="1rem">2022 Verano Estética | Todos os direitos reservados<br/>Developed bt PortDev</Text>
        <IconDiv>
          <a href="#"><Icon src={Facebook}/></a>
          <a href="#"><Icon src={Instagram}/></a>
        </IconDiv>
      </FooterWrapper>
    </FooterBody>
  );
}

export default Footer