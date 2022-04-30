import PopupCard from "../../../../pop-up/index.jsx";
import { Subtitle } from "../../../../styles/styles.js";
import {PopupText, PopupList, PopupItem} from "../../../../pop-up/styles"


function Drenagem(props) {
  return(
    <PopupCard trigger={props.trigger} setTrigger={props.setTrigger} newClassName="listPopup">
      <Subtitle className="SectionTitle" margin="0 auto">Drenágem linfática Manual</Subtitle>
      <PopupText marginBottom="2rem">
        Drenagem linfática é uma técnica de massagem manual (DLM) que tem como objetivo estimular o sistema linfático a eliminar o excesso de fluídos do corpo. Apoiada em evidências científicas, a DLM é reconhecida e indicada para auxiliar em vários tratamentos, além de promover relaxamento e bem-estar.
      </PopupText>
      <Subtitle className="SectionTitle" margin="0 0 2rem">Indicações</Subtitle>
      <PopupList>
        <PopupItem>Atua nos edemas e linfedemas</PopupItem>
        <PopupItem>Auxilia na qualidade do sono</PopupItem>
        <PopupItem>Melhora a circulação sanguínea</PopupItem>
        <PopupItem>Melhora no funcionamento interno</PopupItem>
        <PopupItem>Tratamentos pré e pós cirúrgicos</PopupItem>
        <PopupItem>Auxilia no funcionamento do intestino</PopupItem>
        <PopupItem>Deixa a pele com aspecto mais saudável</PopupItem>
        <PopupItem>Ajuda no combate e redução de celulites</PopupItem>
        <PopupItem>Combate e redução na retenção de líquidos</PopupItem>
        <PopupItem>Pode estimular o funcionamento metabólico</PopupItem>
        <PopupItem>Auxilia no período gestacional e puerpério</PopupItem>
        <PopupItem>Eliminação de substâncias desnecessárias presentes no corpo</PopupItem>
      </PopupList>
    </PopupCard>
  )
}

export default Drenagem