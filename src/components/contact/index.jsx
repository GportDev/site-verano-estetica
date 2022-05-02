import { ButtonFilled, ColumnSection, Imagem, Subtitle, Text } from "../styles/styles"
import { List, ListItem, Section, ContentSection, Whatsapp, Phone, Pin, Mail } from "./styles"
import QRCode from "../../assets/images/QRCode-Verano-Estetica.png"
import { TanSubtitle, TanText, TanButtonFilled} from "../../pages/verano-bronze/styles"


function Contact(props) {
  return(props.orange) ? (
    <>
      <ColumnSection>
        <TanSubtitle>Fale com a gente!</TanSubtitle>
        <TanText margin="2rem 0 4rem" fontSize="1.35rem">
          Entre em contato com a <strong>Verano</strong>, queremos tirar suas dúvidas, ouvir suas críticas e sugestões.
        </TanText>
        <TanButtonFilled href="https://wa.me/5512992301683" target="blank" fontSize="1.25rem">
          <Whatsapp/>
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
                <Phone color="var(--Text-orange)"/>
                (12) 99230-1683
              </ListItem>
              <ListItem lineHeight="2rem" >
                <Pin color="var(--Text-orange)"/>
                Rua Tomás Antônio Gonzaga, 92,<br/> Vila Ema - São José dos Campos
              </ListItem>
              <ListItem>
                <Mail color="var(--Text-orange)"/>
                diretoria.verano@gmail.com
              </ListItem>
            </List>
          </ContentSection>
        </Section>
      </ColumnSection>
    </>
  ) : (
    <>
      <ColumnSection>

        <Subtitle>
          Fale com a gente!
        </Subtitle>
        <Text margin="2rem 0 4rem" fontSize="1.35rem">
          Entre em contato com a <strong>Verano</strong>, queremos tirar suas dúvidas, ouvir suas críticas e sugestões.
        </Text>
        <ButtonFilled href="https://wa.me/5512981942768" target="blank" fontSize="1.25rem">
          <Whatsapp/>
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
                <Phone color="var(--Principal-purple)"/>
                (12) 98194-2768
              </ListItem>
              <ListItem lineHeight="2rem">
                <Pin color="var(--Principal-purple)"/>
                Rua Viena, 133, Jd Oswaldo Cruz,<br/> São José dos Campos - <br/> Ao lado do Center Vale Shopping
              </ListItem>
              <ListItem>
                <Mail color="var(--Principal-purple)"/>
                diretoria.verano@gmail.com
              </ListItem>
            </List>
          </ContentSection>
        </Section>

      </ColumnSection>
    </>
  );
}

export default Contact