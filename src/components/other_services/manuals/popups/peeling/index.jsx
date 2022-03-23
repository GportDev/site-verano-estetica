import PopupCard from "../../../../pop-up/index.jsx";
import { Subtitle, Text } from "../../../../styles/styles.js";
import {PopupText} from "../../../../pop-up/styles"
import DropDown from "../../../../dropdown/index.jsx";
import { OpenDoubt } from "../../../../dropdown/styles.js";
import {useState} from 'react';

function Peeling(props) {
  const [question1, setQuestion1] = useState(false)
  const [question2, setQuestion2] = useState(false)
  const [question3, setQuestion3] = useState(false)

  return(
    <PopupCard trigger={props.trigger} setTrigger={props.setTrigger}>
      <Subtitle className="SectionTitle">Peeling</Subtitle>
      <PopupText>
        O peeling é um tratamento indolor e que tem o intuito de renovar a pele de maneira delicada. Indicado para melhorar os quadros de: hiperpigmentação, cicatrizes, acne e linhas finas.<br/>
        O tratamento esfolia e remove as lesões que há na pele, controla a oleosidade, tem ação antioxidante, reparadora, regeneradora, clareadora, anti-idade e promove um aspecto mais bonito e saudável. 
      </PopupText>
      <Subtitle margin="0 0 2rem" className="PopupSubtitle">Perguntas frequentes</Subtitle>
      <OpenDoubt onClick={setQuestion1}>Qual o benefício do Peeling?</OpenDoubt>
      <DropDown trigger={question1} setTrigger={setQuestion1}>
        <Text>
          É um tratamento para remoção da camada mais superficial da pele, promovendo uma para renovação celular, deixando imediatamente a pele mais macia ao toque, e com brilho renovado.
        </Text>
      </DropDown>
      <OpenDoubt onClick={setQuestion2}>Para qual tipo de tratamento o Peeling é recomendado?</OpenDoubt>
      <DropDown trigger={question2} setTrigger={setQuestion2}>
        <Text>
          O peeling pode ser realizado em todo tipo de pele, em qualquer estação do ano. Indicado para melhorar a qualidade da pele, reduzindo oleosidade, renovando o brilho e amenizando manchas.
        </Text>
      </DropDown>
      <OpenDoubt onClick={setQuestion3}>Quais são as contraindicações do Peeling?</OpenDoubt>
      <DropDown trigger={question3} setTrigger={setQuestion3}>
        <Text>
          Há algumas restrições para realização do peeling como por exemplo: pele recentemente bronzeada, gestante, lactante, hepatites, HIV, doenças autoimune, herpes ativa, dermatite, entre outros.
        </Text>
      </DropDown>
    </PopupCard>
  )
}

export default Peeling
