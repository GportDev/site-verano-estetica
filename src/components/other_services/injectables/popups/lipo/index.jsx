import PopupCard from "../../../../pop-up/index.jsx";
import { Subtitle } from "../../../../styles/styles.js";
import {PopupText, QaDiv} from "../../../../pop-up/styles"
import Accordion from "../../../../accordion/index.jsx";
import { LipoData } from "../../../../accordion/data.js";

function Lipo(props) {

  return(
    <PopupCard trigger={props.trigger} setTrigger={props.setTrigger}>
      <Subtitle className="SectionTitle">Lipo enzimática de Papada</Subtitle>
      <PopupText marginBottom="2rem">
        Uma alternativa sem cortes à redução da gordura submentoniana (papada) é o Ácido Deoxicólico. Quando injetado na região, quebra as células de gordura, reduzindo o aspecto da papada.
      </PopupText>
      <QaDiv>
        <Subtitle className="SectionTitle" margin="0 0 2rem">Perguntas frequentes</Subtitle>
        <Accordion data={LipoData}/>
      </QaDiv>
    </PopupCard>
  )
}

export default Lipo