import { useState } from "react";
import PopupCard from "../../../../pop-up/index.jsx";
import { Subtitle, Text } from "../../../../styles/styles.js";
import { Image, PopupText } from "../../../../pop-up/styles"
import AcidImg from "../../../../../assets/images/preenchimento/preenchimento.jpg"
import DropDown from "../../../../dropdown/index.jsx";
import { OpenDoubt } from "../../../../dropdown/styles.js";


function Acid(props) {  
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

  return (
    <PopupCard trigger={props.trigger} setTrigger={props.setTrigger}>
      <Subtitle>Preenchedores de ácido hiálurônico</Subtitle>
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
      <OpenDoubt onClick={setQuestion1}>O que é preenchimento com ácido hialurônico?</OpenDoubt>
      <DropDown trigger={question1} setTrigger={setQuestion1}>
        <Text>
          O ácido hialurônico é uma substância presente naturalmente no nosso corpo. Com o processo do envelhecimento, nosso corpo produz menos essa substância, e por isso, precisamos devolver através dos preenchimentos. O preenchimento com ácido hialurônico é utilizado para devolver volume, reestruturar a face e também pode ser utilizado para amenizar rugas (dependendo do caso).
        </Text>
      </DropDown>
      <OpenDoubt onClick={setQuestion2}>Qual a função do preenchimento?</OpenDoubt>
      <DropDown trigger={question2} setTrigger={setQuestion2}>
        <Text>
          O ácido hialurônico tem como principal função hidratar profundamente a região onde ele é injetado, dando volume e rejuvenescendo a face.
        </Text>
      </DropDown>
      <OpenDoubt onClick={setQuestion3}>Qual a duração do preenchimento no corpo?</OpenDoubt>
      <DropDown trigger={question3} setTrigger={setQuestion3}>
        <Text>
        A durabilidade do preenchimento com ácido hialurônico pode variar de 6-12 meses.
        </Text>
      </DropDown>
      <OpenDoubt onClick={setQuestion4}>Existe contraindicação?</OpenDoubt>
      <DropDown trigger={question4} setTrigger={setQuestion4}>
        <Text>
          Sim, em alguns casos é contraindicado o preenchimento com ácido hialurônico como por exemplo: gestantes; lactantes; doença autoimune; presença de preenchimento definitivo, entre outros.
        </Text>
      </DropDown>
      <OpenDoubt onClick={setQuestion5}>Em quanto tempo vejo os resultados do preenchimento?</OpenDoubt>
      <DropDown trigger={question5} setTrigger={setQuestion5}>
        <Text>
          O resultado é imediato, porém em até 21 dias após a aplicação, o produto hidrata e a região desincha onde conseguimos observar o preenchedor mais modelado no local.
        </Text>
      </DropDown>
      <OpenDoubt onClick={setQuestion6}>Tenho uma festa no dia seguinte do preenchimento do sulco nasogeniano, posso fazer?</OpenDoubt>
      <DropDown trigger={question6} setTrigger={setQuestion6}>
        <Text>
          Não recomendamos realizar procedimentos quando há algum evento em data muito próxima, pois podem ocorrer eventos adversos como inchaço na região, hematomas e alguns cuidados e restrições são necessários nos primeiros dias.
        </Text>
      </DropDown>
      <OpenDoubt onClick={setQuestion7}>Qual a idade ideal para começar?</OpenDoubt>
      <DropDown trigger={question7} setTrigger={setQuestion7}>
        <Text>
          Preenchimento com ácido hialurônico pode ser realizado a partir dos 18 anos, caso haja indicação.
        </Text>
      </DropDown>
      <OpenDoubt onClick={setQuestion8}>Quanto tempo leva o procedimento?</OpenDoubt>
      <DropDown trigger={question8} setTrigger={setQuestion8}>
        <Text>
          A aplicação tem duração de aproximadamente 30 a 40 min (dependendo da quantidade de produto a ser aplicada).
        </Text>
      </DropDown>
      <OpenDoubt onClick={setQuestion9}>Existe algum cuidado após aplicação?</OpenDoubt>
      <DropDown trigger={question9} setTrigger={setQuestion9}>
        <Text>
          Apesar de poucos, existem sim alguns cuidados necessários após a aplicação. O profissional sempre vai orientar o que é necessário em cada caso, por exemplo, evitar massagens no local da aplicação, não praticar exercícios físicos por até 24h após o procedimento, etc.
        </Text>
      </DropDown>
      <OpenDoubt onClick={setQuestion10}>Existem efeitos adversos?</OpenDoubt>
      <DropDown trigger={question10} setTrigger={setQuestion10}>
        <Text>
          Alguns efeitos colaterais podem ocorrer após a aplicação, os mais comuns são: hematomas, inchaço pontual na região aplicada, vermelhidão, dor local.
        </Text>
      </DropDown>
      <OpenDoubt onClick={setQuestion11}>E se ocorrer alergia?</OpenDoubt>
      <DropDown trigger={question11} setTrigger={setQuestion11}>
        <Text>
          O Ácido Hialurônico é um produto natural do nosso corpo, reações alérgicas são muito raras. Caso ocorra, nossos profissionais são capacitados para resolver qualquer reação adversa e nossa clínica é equipada com os materiais necessários.
        </Text>
      </DropDown>
      <OpenDoubt onClick={setQuestion12}>Qual o intervalo entre as aplicações?</OpenDoubt>
      <DropDown trigger={question12} setTrigger={setQuestion12}>
        <Text>
          Para realizar uma nova aplicação com ácido hialurônico é necessário aguardar no mínimo 20 dias, para que o produto se acomode na face, e o profissional consiga avaliar o resultado final, verificando a necessidade de mais produto.
        </Text>
      </DropDown>
      <OpenDoubt onClick={setQuestion13}>Qual a diferença entre toxina botulínica e preenchimento?</OpenDoubt>
      <DropDown trigger={question13} setTrigger={setQuestion13}>
        <Text>
          A toxina botulínica é utilizada para relaxar o músculo alvo da aplicação, suavizar linhas de expressão sem volumizar e tem durabilidade de aproximadamente 3 a 4 meses. Já o preenchimento é utilizado para dar volume a região tratada e tem durabilidade aproximada de 6-12 meses.
        </Text>
      </DropDown>
    </PopupCard>
  )
}

export default Acid