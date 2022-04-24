import PopupCard from "../../../../pop-up/index.jsx";
import { Subtitle } from "../../../../styles/styles.js";
import { Image, PopupText, QaDiv } from "../../../../pop-up/styles"
import BotoxImg from "../../../../../assets/images/botox/area.jpeg"
import Accordion from "../../../../accordion/index.jsx";
import { BotoxData } from "../../../../accordion/data.js";


function Botox(props) {  
  return (
    <PopupCard trigger={props.trigger} setTrigger={props.setTrigger}>
      <Subtitle className="SectionTitle">Toxina Botulínica</Subtitle>
      <PopupText>
        A Toxina Botulínica é indicada principalmente para amenizar linhas de expressão, geradas pelo movimento repetitivo nas regiões de testa, glabela, e “pés de galinha”.
      </PopupText>
      <Image src={BotoxImg}/>
      <PopupText className="imgList">
        1. Testa - Suaviza linhas de expressão e rugas mais superficiais e aparentes.<br/>
        2. Nariz de coelho - Reduz as rugas no dorso do nariz.<br/>
        3. Pés de galinha - Suaviza linhas de expressão e rugas mais superficiais e aparentes.<br/>
        4. Ponta do nariz - Resulta no levantamento da ponta do nariz.<br/>
        5. Bruxismo - Aplicação do produto nos músculos da mastigação, como masseter e temporal, que vai ajudar a aliviar a tensão da região, amenizando o ranger dos dentes e usado como tratamento para enxaqueca.<br/>
        6. Sorriso gengival - Aplica-se a toxina para provocar a redução do lábio superior e tornando o sorriso mais estético.<br/>
        7. Linhas periorais - Suaviza as linhas de expressão ao redor dos lábios.<br/>
        8. Sorriso invertido - Modifica o formato do sorriso, arqueando as pontas dos lábios.<br/>
        9. Queixo (mento) - Suaviza as chamadas estrias do queixo.<br/>
        10. Efeito Nefertiti - Aplica-se o produto na região do pescoço diminuindo os sinais de rugas do pescoço.<br/>
      </PopupText>
      <PopupText marginBottom="2rem">
        Além destas regiões, é possível tratar diversas queixas como sorriso gengival, enxaqueca, suor excessivo, bruxismo, entre outras questões funcionais
      </PopupText>
      <QaDiv>
        <Subtitle margin="0 0 2rem">Perguntas frequentes</Subtitle>
        <Accordion data={BotoxData} />
      </QaDiv>
    </PopupCard>
  )
}

export default Botox