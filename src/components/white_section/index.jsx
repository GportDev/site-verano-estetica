import React from "react";
import { Container } from "../styles/styles";


function WhiteSection(props) {
  return (
    <Container>
      {props.children}
    </Container>
  )
}

export default WhiteSection