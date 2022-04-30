import PopupCard from "../../../../pop-up/index.jsx";
import { Subtitle } from "../../../../styles/styles.js";
import {PopupText} from "../../../../pop-up/styles"
import Accordion from "../../../../accordion/index.jsx";
import { PeelingData } from "../../../../accordion/data.js";

function Peeling(props) {


  return(
    <PopupCard trigger={props.trigger} setTrigger={props.setTrigger}>
      <Subtitle className="SectionTitle">Peeling</Subtitle>
      <PopupText>
        O peeling é um tratamento indolor e que tem o intuito de renovar a pele de maneira delicada. Indicado para melhorar os quadros de: hiperpigmentação, cicatrizes, acne e linhas finas.<br/>
        O tratamento esfolia e remove as lesões que há na pele, controla a oleosidade, tem ação antioxidante, reparadora, regeneradora, clareadora, anti-idade e promove um aspecto mais bonito e saudável. 
      </PopupText>
      <Subtitle margin="0 0 2rem" className="PopupSubtitle">Perguntas frequentes</Subtitle>
      <Accordion data={PeelingData}/>
    </PopupCard>
  )
}

export default Peeling
