import PopupCard from "../../../../pop-up/index.jsx";
import { Subtitle } from "../../../../styles/styles.js";
import {PopupText, QaDiv} from "../../../../pop-up/styles"
import Accordion from "../../../../accordion/index.jsx";
import { SkinboosterData } from "../../../../accordion/data.js";

function Skinbooster(props) {


  return(
    <PopupCard trigger={props.trigger} setTrigger={props.setTrigger}>
      <Subtitle className="SectionTitle">Intradermoterapia e Skinbooster</Subtitle>
      <PopupText marginBottom="2rem">
        O Skinbooster é uma hidratação injetável que trata profundamente a pele através do ácido hialurônico e diversas vitaminas que possui na sua composição. Eles trazem um resultado muito superior aos cremes noturnos, que atuam somente na camada mais superficial. Pode ser utilizado no tratamento de linhas finas, rejuvenescimento da pele, entre outros.
      </PopupText>
      <QaDiv>
        <Subtitle margin="0 0 2rem">Perguntas frequentes</Subtitle>
        <Accordion data={SkinboosterData}/>
      </QaDiv>
    </PopupCard>
  )
}

export default Skinbooster