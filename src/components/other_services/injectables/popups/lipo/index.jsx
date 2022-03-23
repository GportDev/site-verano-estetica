import { useState } from "react";
import PopupCard from "../../../../pop-up/index.jsx";
import { Subtitle, Text } from "../../../../styles/styles.js";
import {PopupText} from "../../../../pop-up/styles"
import DropDown from "../../../../dropdown/index.jsx";
import { OpenDoubt } from "../../../../dropdown/styles.js";

function Lipo(props) {
  const [question1, setQuestion1] = useState(false)
  const [question2, setQuestion2] = useState(false)
  const [question3, setQuestion3] = useState(false)
  const [question4, setQuestion4] = useState(false)
  const [question5, setQuestion5] = useState(false)

  return(
    <PopupCard trigger={props.trigger} setTrigger={props.setTrigger}>
      <Subtitle>Lipo enzimática de Papada</Subtitle>
      <PopupText>
        Uma alternativa sem cortes à redução da gordura submentoniana (papada) é o Ácido Deoxicólico. Quando injetado na região, quebra as células de gordura, reduzindo o aspecto da papada.
      </PopupText>
      <Subtitle margin="0 0 2rem">Perguntas frequentes</Subtitle>
      <OpenDoubt onClick={setQuestion1}>Como funciona a lipo de papada?</OpenDoubt>
      <DropDown trigger={question1} setTrigger={setQuestion1}>
        <Text>
          São microinjeções do ácido deoxicólico, que tem como objetivo a quebrar as células de gordura para que o nosso corpo a use como energia, reduzindo assim a gordura localizada.
        </Text>
      </DropDown>
      <OpenDoubt onClick={setQuestion2}>Funciona para tratar flacidez?</OpenDoubt>
      <DropDown trigger={question2} setTrigger={setQuestion2}>
        <Text>
          A lipo de papada reduz a gordura da região, caso você já tenha flacidez junto à gordura em excesso, ela não será tratada, pode amenizar. 60 dias após a aplicação final, você pode realizar o tratamento para flacidez.
        </Text>
      </DropDown>
      <OpenDoubt onClick={setQuestion3}>Como a gordura é removida?</OpenDoubt>
      <DropDown trigger={question3} setTrigger={setQuestion3}>
        <Text>
          O ácido deoxicólico age diretamente quebrando a membrana das células de gordura. Assim, essa gordura fica disponível para o seu corpo a utilizar como fonte de energia. Uma inflamação vai ocorrer, inchando o local tratado, o organismo absorve a gordura e após 30 dias da aplicação é possível visualizar os resultados.
        </Text>
      </DropDown>
      <OpenDoubt onClick={setQuestion4}>Quantas sessões são necessárias?</OpenDoubt>
      <DropDown trigger={question4} setTrigger={setQuestion4}>
        <Text>
          Cada cliente possui uma indicação, porém geralmente são necessárias de 4-6 sessões para se obter um resultado satisfatório.
        </Text>
      </DropDown>
      <OpenDoubt onClick={setQuestion5}>Existe alguma contraindicação?</OpenDoubt>
      <DropDown trigger={question5} setTrigger={setQuestion5}>
        <Text>
          Existem algumas restrições para realização das aplicações. Por isso é sempre importante que você realize uma avaliação com o nosso profissional. Gestantes; Lactantes; insuficiência hepática, procedimento cirúrgico na região, distúrbios da tireóide, alto grau de flacidez, entre outros são contraindicações ao tratamento.
        </Text>
      </DropDown>
    </PopupCard>
  )
}

export default Lipo