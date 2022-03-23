import PopupCard from "../../../../pop-up/index.jsx";
import { Subtitle } from "../../../../styles/styles.js";
import {PopupText} from "../../../../pop-up/styles"


function Pdo(props) {
  return(
    <PopupCard trigger={props.trigger} setTrigger={props.setTrigger}>
      <Subtitle>Fios de PDO</Subtitle>
      <PopupText>
      Os fios de PDO são fios absorvíveis pelo organismo e que estimulam o corpo a produzir colágeno. Ou seja, com o passar dos tempos eles naturalmente são absorvidos pelo corpo humano e promovem uma melhora da qualidade e firmeza da pele.
      </PopupText>
      <Subtitle margin="0 0 2rem">Perguntas frequentes</Subtitle>
    </PopupCard>
  )
}

export default Pdo