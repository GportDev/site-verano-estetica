import { Icon } from "../styles/styles";
import { Popup, PopupInner, Back } from "./styles"
import Arrow from "../../assets/icons/arrow-back.png"

function PopupCard(props) {
  return (props.trigger) ? (
    <Popup>
      <PopupInner className={props.newClassName}>
        <Back onClick={() => props.setTrigger(false)}> <Icon src={Arrow} className="arrow"/> </Back>
        {props.children}
      </PopupInner>
    </Popup>
  ) : "";
}

export default PopupCard