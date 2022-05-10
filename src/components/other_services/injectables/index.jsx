import { ProceduresTable, Procedure, TableLink } from "../styles";
import { Subtitle, Section, ContentSection, Text } from "../../styles/styles"
import {useState} from 'react';
import Botox from "../injectables/popups/botox/index.jsx"
import Acid from "./popups/acid";
import Bioestimulator from "./popups/bioestimulator";
import Dermarroller from "./popups/dermaroller";
import Skinbooster from "./popups/skinbooster";
import Lipo from "./popups/lipo";
import Pdo from "./popups/pdo";


function Injectables() {
  const [botoxPopup, setBotoxPopup] = useState(false);
  const [acidPopup, setAcidPopup] = useState(false);
  const [bioestPopup, setBioestPopup] = useState(false);
  const [dermarollerPopup, setDermarollerPopup] = useState(false);
  const [skinboosterPopup, setSkinboosterPopup] = useState(false);
  const [lipoPopup, setLipoPopup] = useState(false);
  const [pdoPopup, setPDOPopup] = useState(false);

  return(
    <Section>
      <ContentSection>
        <Subtitle margin="0 0 2rem">Estética avançada com injetáveis</Subtitle>
        <Text>
          Os procedimentos injetáveis são técnicas de estética avançada, pensados para tratar a face através da injeção de fluidos. São os procedimentos mais procurados em países como China e Estados unidos.
        </Text>
      </ContentSection>
      <ProceduresTable>
        <TableLink onClick={setBotoxPopup} key={1}><Procedure>Toxina Botulínica</Procedure></TableLink>
        <TableLink onClick={setAcidPopup} key={2}><Procedure>Preenchedores com ácido hialurônico</Procedure></TableLink>
        <TableLink onClick={setBioestPopup} key={3}><Procedure>Bioestimuladores de colágeno</Procedure></TableLink>
        <TableLink onClick={setDermarollerPopup} key={4}><Procedure>Microagulhamento com dermaroller</Procedure></TableLink>
        <TableLink onClick={setSkinboosterPopup} key={5}><Procedure>Intradermoterapia e skinbooster</Procedure></TableLink>
        <TableLink onClick={setLipoPopup} key={6}><Procedure>Lipo enzimática de papada</Procedure></TableLink>
        <TableLink onClick={setPDOPopup} key={7}><Procedure>Fios de PDO</Procedure></TableLink>
      </ProceduresTable>
      
      <Botox trigger={botoxPopup} setTrigger={setBotoxPopup}/>
      <Acid trigger={acidPopup} setTrigger={setAcidPopup}/>
      <Bioestimulator trigger={bioestPopup} setTrigger={setBioestPopup}/>
      <Dermarroller trigger={dermarollerPopup} setTrigger={setDermarollerPopup}/>
      <Skinbooster trigger={skinboosterPopup} setTrigger={setSkinboosterPopup}/>
      <Lipo trigger={lipoPopup} setTrigger={setLipoPopup}/>
      <Pdo trigger={pdoPopup} setTrigger={setPDOPopup}/>
    </Section>
  )
}

export default Injectables 