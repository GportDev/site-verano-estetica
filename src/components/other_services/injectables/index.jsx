import { ProceduresTable, Procedure, TableLink } from "../styles";
import { Subtitle, Section, ContentSection, Text } from "../../styles/styles"

function Injectables() {
  return(
    <Section>
      <ContentSection>
        <Subtitle>Estética com injetáveis</Subtitle>
        <Text>
          Os procedimentos injetáveis são técnicas de estética avançada, pensados para tratar a face através da injeção de fluidos. São os procedimentos mais procurados em países como China e Estados unidos.<br/><br/>
          Nossos procedimentos estão listados na tabela ao lado.
        </Text>
      </ContentSection>
      <ProceduresTable>
        <TableLink href="#"><Procedure>Toxina Botulínica</Procedure></TableLink>
        <TableLink href="#"><Procedure>Preenchedores com ácido hialurônico</Procedure></TableLink>
        <TableLink href="#"><Procedure>Bioestimuladores de colágeno</Procedure></TableLink>
        <TableLink href="#"><Procedure>Microagulhamento com dermaroller</Procedure></TableLink>
        <TableLink href="#"><Procedure>Intradermoterapia e Skinbooster</Procedure></TableLink>
        <TableLink href="#"><Procedure>Lipo enzimática de Papada</Procedure></TableLink>
        <TableLink href="#"><Procedure>Fios de PDO</Procedure></TableLink>
      </ProceduresTable>
    </Section>
  )
}

export default Injectables 