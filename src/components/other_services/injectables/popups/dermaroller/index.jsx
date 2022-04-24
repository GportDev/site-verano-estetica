import PopupCard from "../../../../pop-up/index.jsx";
import { Subtitle } from "../../../../styles/styles.js";
import {PopupText, QaDiv} from "../../../../pop-up/styles"
import Accordion from "../../../../accordion/index.jsx";
import { DermarollerData } from "../../../../accordion/data.js";

function Dermarroller(props) {

  return(
    <PopupCard trigger={props.trigger} setTrigger={props.setTrigger}>
      <Subtitle className="SectionTitle">Microagulhamento com dermaroller</Subtitle>
      <PopupText marginBottom="2rem">
        O microagulhamento estimula a produção interna de colágeno. Indicado para tratar mãos, rosto, colo e pescoço. Melhorando diversas queixas como rugas, linhas finas, cicatrizes, manchas, entre outros. Utilizamos a caneta DermaPen, procedimento indolor, onde permite tratar todas as áreas de maneira uniforme.
      </PopupText>
      <QaDiv>
        <Subtitle margin="0 0 2rem">Perguntas frequentes</Subtitle>
        <Accordion data={DermarollerData} />
      </QaDiv>
    </PopupCard>
  )
}

export default Dermarroller