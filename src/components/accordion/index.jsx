import React, { useState } from "react"
import { IconContext } from "react-icons"
import {FiPlus, FiMinus} from "react-icons/fi"
import { Text } from "../styles/styles"
import { AccordionDiv, Container, Wrap, Dropdown } from "./style"

function Accordion(props) {
  const [clicked, setClicked] = useState(false)

  const toggle = index => {
    if(clicked === index){
      //If clicked question is already active, then close it
      return setClicked(null)
    }
    setClicked(index)
  }


  return (
    <IconContext.Provider value={{ color: '#D465E7', size: '25px'}}>
      <AccordionDiv>
        <Container>
          {(props.data).map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h2>{item.question}</h2>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <Text>{item.answer}</Text>
                  </Dropdown>
                ) : null}
              </>
            )
          })}
        </Container>
      </AccordionDiv>
    </IconContext.Provider>
  )
}

export default Accordion