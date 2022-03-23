import { ButtonFilled, ColumnSection, Icon, Imagem, Subtitle, Text } from "../styles/styles"
import { List, ListItem, Section, ContentSection } from "./styles"
import QRCode from "../../assets/images/QRCode-Verano-Estetica.png"
import PurpleDiv from "../purple_div"
import OrangeDiv from "../orange_div"
import { TanSubtitle, TanText, TanButtonFilled} from "../../pages/verano-bronze/styles"

import OrangePhone from "../../assets/icons/orange-phone.png"
import OrangeMail from "../../assets/icons/orange-mail.png"
import OrangePin from "../../assets/icons/orange-pin.png"
import PurplePhone from "../../assets/icons/purple-phone.png"
import PurpleMail from "../../assets/icons/purple-mail.png"
import PurplePin from "../../assets/icons/purple-pin.png"
import Wpp from "../../assets/icons/wpp.png"



function Contact(props) {
  return(props.orange) ? (
    <>
      <OrangeDiv>
        <ColumnSection>
          <TanSubtitle>Fale com a gente!</TanSubtitle>
          <TanText margin="2rem 0 4rem" fontSize="1.35rem">
            Entre em contato com a <strong>Verano</strong>, queremos tirar suas dúvidas, ouvir suas críticas e sugestões.
          </TanText>
          <TanButtonFilled fontSize="1.25rem">
            <Icon src={Wpp} className="wpp"/>
            Entrar em contato
          </TanButtonFilled>
          <Section>
            <ContentSection>
              <TanSubtitle margin="1.25rem 0">
                Ou escanei aqui
              </TanSubtitle>
              <Imagem src={QRCode} shadow="0" width="16rem"/>
            </ContentSection>
            <ContentSection>
              <List>
                <ListItem>
                  <Icon src={OrangePhone}/>
                  (12) 98194-2768
                </ListItem>
                <ListItem lineHeight="2rem" >
                  <Icon src={OrangePin}/>
                  Rua Tomás Antônio Gonzaga, 92,<br/> Vila Ema - São José dos Campos
                </ListItem>
                <ListItem>
                  <Icon src={OrangeMail}/>
                  diretoria.verano@gmail.com
                </ListItem>
              </List>
            </ContentSection>
          </Section>
        </ColumnSection>
      </OrangeDiv>
    </>
  ) : (
    <>
      <PurpleDiv>
        <ColumnSection>
          <Subtitle>
            Fale com a gente!
          </Subtitle>
          <Text margin="2rem 0 4rem" fontSize="1.35rem">
            Entre em contato com a <strong>Verano</strong>, queremos tirar suas dúvidas, ouvir suas críticas e sugestões.
          </Text>
          <ButtonFilled fontSize="1.25rem">
            <Icon src={Wpp} className="wpp"/>
            Entrar em contato
          </ButtonFilled>
          <Section>
            <ContentSection>
              <Subtitle margin="1.25rem 0">
                Ou escanei aqui
              </Subtitle>
              <Imagem src={QRCode} shadow="0" width="16rem"/>
            </ContentSection>
            <ContentSection>
              <List>
                <ListItem>
                  <Icon src={PurplePhone} />
                  (12) 98194-2768
                </ListItem>
                <ListItem lineHeight="2rem">
                  <Icon src={PurplePin}/>
                  Rua Viena, 133, Jd Oswaldo Cruz,<br/> São José dos Campos - <br/> Ao lado do Center Vale Shopping
                </ListItem>
                <ListItem>
                  <Icon src={PurpleMail}/>
                  diretoria.verano@gmail.com
                </ListItem>
              </List>
            </ContentSection>
          </Section>
        </ColumnSection>
      </PurpleDiv>
    </>
  );
}

export default Contact