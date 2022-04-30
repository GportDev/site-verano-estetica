import { LogoVerano } from "../styles/styles"
import { FooterBody, FooterWrapper, Icon, IconDiv, Text } from "./styles"
import Logo from "../../assets/images/Logo Verano.png"
import Facebook from "../../assets/icons/facebook.svg"
import Instagram from "../../assets/icons/instagram.svg"

function Footer(props) {
  return(props.orange) ? (
    <FooterBody className="orange">
      <FooterWrapper>
        <LogoVerano src={Logo}/>
        <Text fontSize="1rem">2022 Verano Estética | Todos os direitos reservados<br/>Developed bt PortDev</Text>
        <IconDiv>
          <a href="https://web.facebook.com/verano.lasersjc" target="blanck"><Icon src={Facebook}/></a>
          <a href="https://www.instagram.com/verano.lasersjc/" target="blanck"><Icon src={Instagram}/></a>
        </IconDiv>
      </FooterWrapper>
    </FooterBody>
  ) : (
    <FooterBody>
      <FooterWrapper>
        <LogoVerano src={Logo} />
        <Text fontSize="1rem">2022 Verano Estética | Todos os direitos reservados<br/>Developed bt PortDev</Text>
        <IconDiv>
          <a href="https://web.facebook.com/verano.lasersjc" target="blanck"><Icon src={Facebook}/></a>
          <a href="https://www.instagram.com/verano.lasersjc/" target="blanck"><Icon src={Instagram}/></a>
        </IconDiv>
      </FooterWrapper>
    </FooterBody>
  );
}

export default Footer