import { ButtonFilled, ColumnSection, ContentSection, Imagem, List, ListItem, Subtitle, Text, Section } from "../styles/styles"
import QRCode from "../../assets/images/QRCode-Verano-Estetica.png"
import PurpleSection from "../purple_section"

function Contact() {
  return(
    <>
      <PurpleSection>
        <ColumnSection>
          <Subtitle>Fale com a gente!</Subtitle>
          <Text margin="4rem">
            Entre em contato com a <strong>Verano</strong>, queremos tirar suas dúvidas, ouvir suas críticas e sugestões.
          </Text>
          <ButtonFilled>Entrar em contato</ButtonFilled>
          <Section>
            <Imagem src={QRCode} shadow="0" width="16rem"/>
            <ContentSection>
              <List>
                <ListItem>(12) 98194-2768</ListItem>
                <ListItem>Rua João frango</ListItem>
                <ListItem>diretoria.verano@gmail.com</ListItem>
              </List>
            </ContentSection>
          </Section>
        </ColumnSection>
      </PurpleSection>
    </>
  )
}

export default Contact