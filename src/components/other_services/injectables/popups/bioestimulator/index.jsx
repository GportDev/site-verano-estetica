import { useState } from "react";
import PopupCard from "../../../../pop-up/index.jsx";
import { Subtitle, Text } from "../../../../styles/styles.js";
import {PopupText} from "../../../../pop-up/styles"
import DropDown from "../../../../dropdown/index.jsx";
import { OpenDoubt } from "../../../../dropdown/styles.js";

function Bioestimulator(props) {
  const [question1, setQuestion1] = useState(false)
  const [question2, setQuestion2] = useState(false)
  const [question3, setQuestion3] = useState(false)

  return(
    <PopupCard trigger={props.trigger} setTrigger={props.setTrigger}>
      <Subtitle>Bioestimuladores de colágeno</Subtitle>
      <PopupText>
        Tem como principal função dar sustentação à pele, formar colágeno e oferecer uma aparência bem mais jovem e firme, trabalhando, então, as rugas, flacidez e o rejuvenescimento. 
      </PopupText>
      <Subtitle margin="0 0 2rem">Perguntas frequentes</Subtitle>
      <OpenDoubt onClick={setQuestion1}>Qual a duração do efeito do Bioestimulador de Colágeno?</OpenDoubt>
      <DropDown trigger={question1} setTrigger={setQuestion1}>
        <Text>
          Os resultados dependem da capacidade do organismo de produzir o colágeno, então na maioria das vezes é possível observar os resultados após a segunda aplicação.<br/>
          O Bioestimulador dura aproximadamente 18 meses na pele.
        </Text>
      </DropDown>
      <OpenDoubt onClick={setQuestion2}>Qual o intervalo de aplicações entre sessões?</OpenDoubt>
      <DropDown trigger={question2} setTrigger={setQuestion2}>
        <Text>
          O intervalo da aplicação entre as sessões é de no mínimo 30 dias, podendo ser um período de intervalo maior a depender do tratamento proposto. Após 18 meses do tratamento é indicado que realize manutenções.
        </Text>
      </DropDown>
      <OpenDoubt onClick={setQuestion3}>Existe uma idade limite para fazer tratamento com Bioestimulador de Colágeno?</OpenDoubt>
      <DropDown trigger={question3} setTrigger={setQuestion3}>
        <Text>
          A idade mínima é a partir de 18 anos. E não existe idade limite, então se a pessoa tem 70, 80, 90 anos pode aplicar, inclusive é indicado nestes casos, pois nestas idades a pele tem bastante flacidez. Mas as pessoas com 20 a 25 anos também podem fazer, pois vai prevenir o envelhecimento e ainda proporciona um efeito lifting.
        </Text>
      </DropDown>
    </PopupCard>
  )
}

export default Bioestimulator