import { useState } from "react";
import PopupCard from "../../../../pop-up/index.jsx";
import { Subtitle, Text } from "../../../../styles/styles.js";
import {PopupText} from "../../../../pop-up/styles"
import DropDown from "../../../../dropdown/index.jsx";
import { OpenDoubt } from "../../../../dropdown/styles.js";

function Dermarroller(props) {
  const [question1, setQuestion1] = useState(false)
  const [question2, setQuestion2] = useState(false)
  const [question3, setQuestion3] = useState(false)
  const [question4, setQuestion4] = useState(false)

  return(
    <PopupCard trigger={props.trigger} setTrigger={props.setTrigger}>
      <Subtitle>Microagulhamento com dermaroller</Subtitle>
      <PopupText>
        O microagulhamento estimula a produção interna de colágeno. Indicado para tratar mãos, rosto, colo e pescoço. Melhorando diversas queixas como rugas, linhas finas, cicatrizes, manchas, entre outros. Utilizamos a caneta DermaPen, procedimento indolor, onde permite tratar todas as áreas de maneira uniforme.
      </PopupText>
      <Subtitle margin="0 0 2rem">Perguntas frequentes</Subtitle>
      <OpenDoubt onClick={setQuestion1}>Quais os benefícios do microagulhamento?</OpenDoubt>
      <DropDown trigger={question1} setTrigger={setQuestion1}>
        <Text>
          Reduz as linhas de expressão e rugas, promove firmeza da pele, ameniza manchas, repara cicatrizes e revitaliza.
        </Text>
      </DropDown>
      <OpenDoubt onClick={setQuestion2}>O que são os ativos usados na técnica de microagulhamento?</OpenDoubt>
      <DropDown trigger={question2} setTrigger={setQuestion2}>
        <Text>
          As monodoses são selecionadas de acordo com a queixa principal do cliente. Podendo elas ajudarem a: clarear, potencializar o efeito da Toxina Botulínica, amenizar poros dilatados, reduzir oleosidade, iluminar e rejuvenescer a pele.
        </Text>
      </DropDown>
      <OpenDoubt onClick={setQuestion3}>Remove cicatriz de acne?</OpenDoubt>
      <DropDown trigger={question3} setTrigger={setQuestion3}>
        <Text>
          Ao longo do tratamento, a profundidade da cicatriz vai reduzindo, melhorando a coloração, tornando esta cada vez mais imperceptível.
        </Text>
      </DropDown>
      <OpenDoubt onClick={setQuestion4}>Quais as contraindicações do microagulhamento?</OpenDoubt>
      <DropDown trigger={question4} setTrigger={setQuestion4}>
        <Text>
          Há algumas restrições para realizar o microagulhamento como: pele lesionada e infecções ativas, tendência a quelóides, clientes em quimioterapia/radioterapia, imunodeprimidos, entre outros.
        </Text>
      </DropDown>
    </PopupCard>
  )
}

export default Dermarroller