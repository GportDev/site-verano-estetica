import { Popup, PopupInner, Back } from "./styles"

function PopupCard(props) {
  return (props.trigger) ? (
    <Popup>
      <PopupInner className={props.newClassName}>
        <Back onClick={() => props.setTrigger(false)}> Voltar </Back>
        {props.children}
      </PopupInner>
    </Popup>
  ) : "";
}

export default PopupCard