import PopupCard from "../../../../pop-up/index.jsx";
import { Subtitle } from "../../../../styles/styles.js";
import {PopupText, PopupItem, PopupList} from "../../../../pop-up/styles"


function Fisioterapia(props) {
  return(
    <PopupCard trigger={props.trigger} setTrigger={props.setTrigger} newClassName="listPopup">
      <Subtitle className="SectionTitle" margin="0 auto">Fisioterapia pélvica</Subtitle>
      <PopupText marginBottom="2rem">
        Reabilitação das disfunções do assoalho pélvico, que é o conjunto de músculos e ligamentos que sustentam órgãos como bexiga, útero, intestino e tudo que fica na região baixa do abdômen.
      </PopupText>
      <Subtitle className="SectionTitle" margin="0 0 2rem">Indicações</Subtitle>
      <PopupList>
        <PopupItem>Tratamento de diástase</PopupItem>
        <PopupItem>Tratamento de incontinência urinária</PopupItem>
        <PopupItem>Acompanhamento gestacional com exercícios para o Assoalho pélvico</PopupItem>
      </PopupList>
    </PopupCard>
  )
}

export default Fisioterapia