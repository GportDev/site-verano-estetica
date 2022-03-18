import { ButtonFilled, ColumnSection, Imagem, Subtitle, Text } from "../styles/styles"
import { List, ListItem, Section, ContentSection } from "./styles"
import QRCode from "../../assets/images/QRCode-Verano-Estetica.png"
import PurpleDiv from "../purple_div"

function Contact() {
  return(
    <>
      <PurpleDiv>
        <ColumnSection>
          <Subtitle>Fale com a gente!</Subtitle>
          <Text margin="2rem 0 4rem">
            Entre em contato com a <strong>Verano</strong>, queremos tirar suas dúvidas, ouvir suas críticas e sugestões.
          </Text>
          <ButtonFilled fontSize="1.25rem">Entrar em contato</ButtonFilled>
          <Section>
            <ContentSection>
              <Subtitle margin="1.25rem 0">Ou escanei aqui</Subtitle>
              <Imagem src={QRCode} shadow="0" width="16rem"/>
            </ContentSection>
            <ContentSection>
              <List>
                <ListItem>(12) 98194-2768</ListItem>
                <ListItem lineHeight="2rem">Rua Viena, 133, Jd Oswaldo Cruz,<br/> São José dos Campos - Ao lado do Center Vale Shopping</ListItem>
                <ListItem>diretoria.verano@gmail.com</ListItem>
              </List>
            </ContentSection>
          </Section>
        </ColumnSection>
      </PurpleDiv>
    </>
  )
}

export default Contact