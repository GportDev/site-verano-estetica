import PopupCard from "../../../../pop-up/index.jsx";
import { Subtitle } from "../../../../styles/styles.js";
import { Image, PopupText } from "../../../../pop-up/styles"
import AcidImg from "../../../../../assets/images/preenchimento/preenchimento.jpg"

import Accordion from "../../../../accordion/index.jsx";
import { AcidData } from "../../../../accordion/data.js";

function Acid(props) {  

  return (
    <PopupCard trigger={props.trigger} setTrigger={props.setTrigger}>
      <Subtitle className="SectionTitle">Preenchedores de ácido hiálurônico</Subtitle>
      <PopupText>
        O preenchimento com ácido hialurônico é utilizado para tratar diversas queixas, desde dar volume, melhorar contornos e reestruturar a face. É muito utilizado para corrigir assimetrias deixando o seu rosto mais harmônico. O preenchimento pode ser realizado nas regiões de: mandíbula, lábios, bigode chinês, olheiras e muito mais
      </PopupText>
      <Image src={AcidImg}/>
      <PopupText className="imgList">
        1. Olheiras - Reduz a profundidade das olheiras, tornando-as menos aparentes.<br/>
        2. Malar - Promove um efeito de lifting na face, conhecido como top model look ou efeito blush. Muitas vezes amenizando o bigode chinês.<br/>
        3. Sulco Nasogeniano (bigode chinês) -Ameniza o sulco nasogeniano, conhecido como bigode chinês, melhorando o aspecto envelhecido.<br/>
        4. Lábios (boca) - Contorno, hidratação e volume nos lábios.<br/>
        5. Linha de marionete - Conhecido como “boca triste” ou linha de marionete, o sulco formado da boca até o queixo, pode ser suavizado a partir da aplicação de preenchimento com ácido hialurônico.<br/>
        6. Ângulo da mandíbula - Dá contorno e formato à mandíbula, tornando o rosto mais harmonioso.<br/>
        7. Mento (queixo) - O preenchimento no queixo pode ser utilizado para projetar, volumizar ou para amenizar rugas que podem se formar na região.<br/>
        8. Rugas do pescoço - A aplicação da Toxina Botulínica (Botox®) previne a formação das linhas no pescoço, já o preenchimento com ácido hialurônico ameniza essas linhas já formadas.<br/>
      </PopupText>
      <PopupText marginBottom="2rem">
        Além destas regiões, é possível tratar diversas queixas como sorriso gengival, enxaqueca, suor excessivo, bruxismo, entre outras questões funcionais
      </PopupText>
      <Subtitle margin="0 0 2rem">Perguntas frequentes</Subtitle>
      <Accordion data={AcidData}/>
    </PopupCard>
  )
}

export default Acid