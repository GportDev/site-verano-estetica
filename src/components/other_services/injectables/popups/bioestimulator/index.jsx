import PopupCard from "../../../../pop-up/index.jsx";
import { Subtitle } from "../../../../styles/styles.js";
import {PopupText, QaDiv} from "../../../../pop-up/styles"
import {BioestData} from "../../../../accordion/data"
import Accordion from "../../../../accordion/index.jsx";

function Bioestimulator(props) {

  return(
    <PopupCard trigger={props.trigger} setTrigger={props.setTrigger}>
      <Subtitle className="SectionTitle">Bioestimuladores de colágeno</Subtitle>
      <PopupText marginBottom="2rem">
        Tem como principal função dar sustentação à pele, formar colágeno e oferecer uma aparência bem mais jovem e firme, trabalhando, então, as rugas, flacidez e o rejuvenescimento. 
      </PopupText>
      <QaDiv>
        <Subtitle className="SectionTitle" margin="0 0 2rem">Perguntas frequentes</Subtitle>
        <Accordion data={BioestData}/>
      </QaDiv>
    </PopupCard>
  )
}

export default Bioestimulator