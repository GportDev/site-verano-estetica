import PopupCard from "../../../../pop-up/index.jsx";
import { Subtitle } from "../../../../styles/styles.js";
import {PopupText, QaDiv} from "../../../../pop-up/styles"


function Pdo(props) {
  return(
    <PopupCard trigger={props.trigger} setTrigger={props.setTrigger}>
      <Subtitle className="SectionTitle">Fios de PDO</Subtitle>
      <PopupText marginBottom="2rem">
      Os fios de PDO são fios absorvíveis pelo organismo e que estimulam o corpo a produzir colágeno. Ou seja, com o passar dos tempos eles naturalmente são absorvidos pelo corpo humano e promovem uma melhora da qualidade e firmeza da pele.
      </PopupText>
      <QaDiv>
        <Subtitle margin="0 0 2rem">Perguntas frequentes</Subtitle>
      </QaDiv>
    </PopupCard>
  )
}

export default Pdo