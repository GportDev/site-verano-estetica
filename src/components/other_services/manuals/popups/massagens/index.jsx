import PopupCard from "../../../../pop-up/index.jsx";
import { Subtitle } from "../../../../styles/styles.js";
import {PopupList, PopupItem} from "../../../../pop-up/styles"

function Massagem(props) {
  return(
    <PopupCard trigger={props.trigger} setTrigger={props.setTrigger} newClassName="listPopup">
      <Subtitle margin="0 auto 2rem">Terapias Manuais</Subtitle>
      <PopupList>
        <PopupItem>Manta Detox</PopupItem>
        <PopupItem>Criolipólise.</PopupItem>
        <PopupItem>Radiofrequência.</PopupItem>
        <PopupItem>Limpeza de pele.</PopupItem>
        <PopupItem>Intradermoterapia.</PopupItem>
        <PopupItem>Hidratação facial.</PopupItem>
        <PopupItem>Drenagem linfática.</PopupItem>
        <PopupItem>Massagem relaxante.</PopupItem>
        <PopupItem>Massagem modeladora.</PopupItem>
        <PopupItem>Massagem terapêutica.</PopupItem>
        <PopupItem>Revitalização facial.</PopupItem> 
        <PopupItem>Descoloração de pelos.</PopupItem> 
        <PopupItem>Design de sobrancelhas.</PopupItem>
        <PopupItem>Peeling químico e físico.</PopupItem>
        <PopupItem>Esfoliação corporal e facial.</PopupItem>
        <PopupItem>Drenagem linfática pós operatório.</PopupItem>
        <PopupItem>Tratamento de estrias e cicatrizes.</PopupItem>
        <PopupItem>Tratamento de Fibrose e Aderência cicatricial.</PopupItem>
      </PopupList>
    </PopupCard>
  )
}

export default Massagem