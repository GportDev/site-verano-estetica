import { ProceduresTable, Procedure, TableLink } from "../styles.js";

import { Section, ContentSection, Subtitle, Text } from "../../styles/styles";

function Manuals() {
  return(
    <Section margin="6rem auto" >
      <ProceduresTable>
        <TableLink href="#"><Procedure>Drenagem linfática manual</Procedure></TableLink>
        <TableLink href="#"><Procedure>Fisioterapia Pélvica</Procedure></TableLink>
        <TableLink href="#"><Procedure>Massagem</Procedure></TableLink>
        <TableLink href="#"><Procedure>Peeling</Procedure></TableLink>
      </ProceduresTable>
      <ContentSection>
        <Subtitle>Procedimentos Manuais</Subtitle>
        <Text>
          Os procedimentos manuais são técnicas de terapia corporal feitos pela nossa fisioterapeuta, todos eles tem o objetivo de melhorar a estética e aumentar seu bem estar.<br/><br/>
          Nossos procedimentos estão listados na tabela ao lado.
        </Text>
      </ContentSection>
    </Section>
  )
}

export default Manuals