import { Dropdown, DropdownContent } from "./styles";


function DropDown(props) {
  return(props.trigger) ? (
    <>
      <Dropdown>
        <DropdownContent onClick={() => props.setTrigger(false)}>
          {props.children}
        </DropdownContent>
      </Dropdown>
    </>
  ) : "";
}

export default DropDown