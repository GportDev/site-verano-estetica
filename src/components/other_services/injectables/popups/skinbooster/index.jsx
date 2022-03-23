import { useState } from "react";
import PopupCard from "../../../../pop-up/index.jsx";
import { Subtitle, Text } from "../../../../styles/styles.js";
import {PopupText} from "../../../../pop-up/styles"
import DropDown from "../../../../dropdown/index.jsx";
import { OpenDoubt } from "../../../../dropdown/styles.js";

function Skinbooster(props) {
  const [question1, setQuestion1] = useState(false)
  const [question2, setQuestion2] = useState(false)
  const [question3, setQuestion3] = useState(false)
  const [question4, setQuestion4] = useState(false)

  return(
    <PopupCard trigger={props.trigger} setTrigger={props.setTrigger}>
      <Subtitle>Intradermoterapia e Skinbooster</Subtitle>
      <PopupText>
        O Skinbooster é uma hidratação injetável que trata profundamente a pele através do ácido hialurônico e diversas vitaminas que possui na sua composição. Eles trazem um resultado muito superior aos cremes noturnos, que atuam somente na camada mais superficial. Pode ser utilizado no tratamento de linhas finas, rejuvenescimento da pele, entre outros.
      </PopupText>
      <Subtitle margin="0 0 2rem">Perguntas frequentes</Subtitle>
      <OpenDoubt onClick={setQuestion1}>O que é Skinbooster?</OpenDoubt>
      <DropDown trigger={question1} setTrigger={setQuestion1}>
        <Text>
          O skinbooster é aplicado através de microinjeções que podem ser realizadas no rosto, pescoço, colo e mãos para hidratação destas regiões. A ação dele é potencializada com maior número de sessões e cuidados diários com a pele, os resultados variam de pessoa para pessoa, podendo durar até 6 meses.
        </Text>
      </DropDown>
      <OpenDoubt onClick={setQuestion2}>Como funciona o Skinbooster e quanto tempo ele dura?</OpenDoubt>
      <DropDown trigger={question2} setTrigger={setQuestion2}>
        <Text>
          São feitas microinjeções de Ácido Hialurônico + ativos por todo o rosto, ele age estimulando a produção de colágeno e elastina. A ação dele é potencializada com maior número de sessões e pode durar até 6 meses, depende de cada organismo.
        </Text>
      </DropDown>
      <OpenDoubt onClick={setQuestion3}>Os procedimentos são feitos com agulha?</OpenDoubt>
      <DropDown trigger={question3} setTrigger={setQuestion3}>
        <Text>
          Utilizamos a agulha mais fina do mundo para maior conforto na hora da aplicação
        </Text>
      </DropDown>
      <OpenDoubt onClick={setQuestion4}>Há aplicação de anestesia?</OpenDoubt>
      <DropDown trigger={question4} setTrigger={setQuestion4}>
        <Text>
          Para maior conforto na hora da aplicação utilizamos pomada anestésica que deixa o tratamento bem tolerável.
        </Text>
      </DropDown>
    </PopupCard>
  )
}

export default Skinbooster