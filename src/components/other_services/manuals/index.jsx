import { ProceduresTable, Procedure, TableLink } from "../styles.js";
import { Section, ContentSection, Subtitle, Text } from "../../styles/styles";
import {useState} from 'react';
import Drenagem from "./popups/drenagem/index.jsx";
import Fisioterapia from "./popups/fisioterapia/index.jsx"
import Massagem from "./popups/massagens/index.jsx"
import Peeling from "./popups/peeling/index.jsx";

function Manuals() {
  const [drenagemPopup, setDrenagemPopup] = useState(false);
  const [fisioPopup, setFisioPopup] = useState(false);
  const [massagemPopup, setMassagemPopup] = useState(false);
  const [peelingPopup, setPeelingPopup] = useState(false);

  return(
    <Section margin="6rem auto" >
      <ContentSection>
        <Subtitle margin="0 0 2rem">Procedimentos Manuais</Subtitle>
        <Text>
          Os procedimentos manuais são técnicas de terapia corporal feitos pela nossa fisioterapeuta, todos eles tem o objetivo de melhorar a estética e aumentar seu bem estar.
        </Text>
      </ContentSection>
      <ProceduresTable>
        <TableLink onClick={setDrenagemPopup}><Procedure>Drenagem linfática manual</Procedure></TableLink>
        <TableLink onClick={setFisioPopup}><Procedure>Fisioterapia Pélvica</Procedure></TableLink>
        <TableLink onClick={setMassagemPopup}><Procedure>Massagem</Procedure></TableLink>
        <TableLink onClick={setPeelingPopup}><Procedure>Peeling</Procedure></TableLink>
      </ProceduresTable>
      <Drenagem trigger={drenagemPopup} setTrigger={setDrenagemPopup}/>
      <Fisioterapia trigger={fisioPopup} setTrigger={setFisioPopup}/>
      <Massagem trigger={massagemPopup} setTrigger={setMassagemPopup}/>
      <Peeling trigger={peelingPopup} setTrigger={setPeelingPopup}/>
    </Section>
  )
}

export default Manuals