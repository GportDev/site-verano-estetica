import { useState } from "react";
import PopupCard from "../../../../pop-up/index.jsx";
import { Subtitle, Text } from "../../../../styles/styles.js";
import { Image, PopupText } from "../../../../pop-up/styles"
import BotoxImg from "../../../../../assets/images/botox/area.jpeg"
import DropDown from "../../../../dropdown/index.jsx";
import { OpenDoubt } from "../../../../dropdown/styles.js";


function Botox(props) {  
  const [question1, setQuestion1] = useState(false)
  const [question2, setQuestion2] = useState(false)
  const [question3, setQuestion3] = useState(false)
  const [question4, setQuestion4] = useState(false)
  const [question5, setQuestion5] = useState(false)
  const [question6, setQuestion6] = useState(false)
  const [question7, setQuestion7] = useState(false)
  const [question8, setQuestion8] = useState(false)
  const [question9, setQuestion9] = useState(false)
  const [question10, setQuestion10] = useState(false)
  const [question11, setQuestion11] = useState(false)
  const [question12, setQuestion12] = useState(false)
  const [question13, setQuestion13] = useState(false)
  const [question14, setQuestion14] = useState(false)

  return (
    <PopupCard trigger={props.trigger} setTrigger={props.setTrigger}>
      <Subtitle>Toxina Botulínica</Subtitle>
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
      <Subtitle margin="0 0 2rem">Perguntas frequentes</Subtitle>
      <OpenDoubt onClick={setQuestion1}>Como a toxina botulínica age?</OpenDoubt>
      <DropDown trigger={question1} setTrigger={setQuestion1}>
        <Text>
         A Toxina Botulínica age relaxando a musculatura, assim, prevenindo rugas e amenizando as que já estão presentes (marcadas). Além disto, existem outras indicações funcionais como bruxismo, suor excessivo, enxaqueca, sorriso gengival, entre outros.
        </Text>
      </DropDown>
      <OpenDoubt onClick={setQuestion2}>Como funciona o tratamento?</OpenDoubt>
      <DropDown trigger={question2} setTrigger={setQuestion2}>
        <Text>
          Na Verano utilizamos a agulha mais fina do mundo para a aplicação. A Toxina Botulínica é aplicada através de pequenas injeções na região a ser tratada.
        </Text>
      </DropDown>
      <OpenDoubt onClick={setQuestion3}>Quanto tempo dura uma aplicação da toxina botulínica?</OpenDoubt>
      <DropDown trigger={question3} setTrigger={setQuestion3}>
        <Text>
          Em média, e por bula, a Toxina Botulínica para fins estéticos tem duração de 3 a 4 meses. Para fins terapêuticos de 6 a 12 meses dependendo do organismo.
        </Text>
      </DropDown>
      <OpenDoubt onClick={setQuestion4}>O que significa ui?</OpenDoubt>
      <DropDown trigger={question4} setTrigger={setQuestion4}>
        <Text>
          UI significa Unidade Internacional do produto, neste caso a Toxina Botulínica. Cada cliente requer uma quantidade de UI específica para o seu caso, variando muito de acordo com a força muscular, idade, sexo e região de aplicação. Alguns pontos vão de 2 unidades, outras 3, 4 ou mais.
        </Text>
      </DropDown>
      <OpenDoubt onClick={setQuestion5}>Quanto tempo demora para começar o efeito?</OpenDoubt>
      <DropDown trigger={question5} setTrigger={setQuestion5}>
        <Text>
          O efeito começa aproximadamente em 5 dias após a aplicação, e o resultado pode ser avaliado em 14 dias após.
        </Text>
      </DropDown>
      <OpenDoubt onClick={setQuestion6}>Pode ser usado algum tipo de anestésico?</OpenDoubt>
      <DropDown trigger={question6} setTrigger={setQuestion6}>
        <Text>
          É um tratamento rápido e praticamente indolor, para um melhor conforto ao cliente é sim possível utilizar pomada anestésica e/ou gelo no local da aplicação.
        </Text>
      </DropDown>
      <OpenDoubt onClick={setQuestion7}>Qual a idade indicada para começar as aplicações?</OpenDoubt>
      <DropDown trigger={question7} setTrigger={setQuestion7}>
        <Text>
          É possível começar a aplicação preventiva, a partir dos 18 anos. Também é indicado sua utilização para potencializar os resultados de outros tratamentos.
        </Text>
      </DropDown>
      <OpenDoubt onClick={setQuestion8}>Quanto tempo leva o procedimento?</OpenDoubt>
      <DropDown trigger={question8} setTrigger={setQuestion8}>
        <Text>
          A aplicação leva, em média, de 20 a 30 minutos.
        </Text>
      </DropDown>
      <OpenDoubt onClick={setQuestion9}>Existe algum cuidade após a aplicação?</OpenDoubt>
      <DropDown trigger={question9} setTrigger={setQuestion9}>
        <Text>
          Apesar de poucos, existem sim alguns cuidados necessários após a aplicação. O profissional sempre vai orientar o que é necessário em cada caso, por exemplo, não é recomendado praticar exercício físico e se expor ao sol ou calor no dia da aplicação.
        </Text>
      </DropDown>
      <OpenDoubt onClick={setQuestion10}>Existe alguma contraindicação?</OpenDoubt>
      <DropDown trigger={question10} setTrigger={setQuestion10}>
        <Text>
          Sim, existem algumas contraindicações como por exemplo: gestantes; lactantes; estar fazendo tratamento com antibióticos ou anti-inflamatório; doença autoimune e histórico de alergia a algum componente do produto.
        </Text>
      </DropDown>
      <OpenDoubt onClick={setQuestion11}>Quais são os efeitos colaterais?</OpenDoubt>
      <DropDown trigger={question11} setTrigger={setQuestion11}>
        <Text>
          Alguns efeitos colaterais podem acontecer após a aplicação, os mais comuns são: hematomas, inchaço pontual na região aplicada, vermelhidão, dor local e dores de cabeça.
        </Text>
      </DropDown>
      <OpenDoubt onClick={setQuestion12}>Posso ter alergia a toxina botulínica?</OpenDoubt>
      <DropDown trigger={question12} setTrigger={setQuestion12}>
        <Text>
          Reações alérgicas são muito raras, mas podem acontecer. Caso ocorra, nossos profissionais são capacitados para resolver qualquer reação adversa e nossas unidades são todas equipadas com os materiais necessários.
        </Text>
      </DropDown>
      <OpenDoubt onClick={setQuestion13}>Qual o intervalo entra as aplicações?</OpenDoubt>
      <DropDown trigger={question13} setTrigger={setQuestion13}>
        <Text>
          O intervalo mínimo é de 3 meses.
        </Text>
      </DropDown>
      <OpenDoubt onClick={setQuestion14}>Como a toxina botulínica pode ser usada como um tratamento preventivo?</OpenDoubt>
      <DropDown trigger={question14} setTrigger={setQuestion14}>
        <Text>
          Usando a Toxina Botulínica de maneira preventiva, conseguimos adiar a formação de rugas profundas durante o processo de envelhecimento.
        </Text>
      </DropDown>
    </PopupCard>
  )
}

export default Botox