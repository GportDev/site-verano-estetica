import { Popup, PopupInner } from "./styles"
import { useClickOutside } from "../../utils/hooks/useClickOutside";

function PopupCard(props) {

  let domNode = useClickOutside(() => {
    props.setTrigger(false)
  })
  
  return (props.trigger) ? (
    <Popup>
      <PopupInner ref={domNode} className={props.newClassName}>
        {props.children}
      </PopupInner>
    </Popup>
  ) : "";
}

export default PopupCard