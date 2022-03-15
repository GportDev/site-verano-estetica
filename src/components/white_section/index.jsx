import React from "react";
import { Section } from "../styles/styles";


function WhiteSection(props) {
  return (
    <Section>
      {props.children}
    </Section>
  )
}

export default WhiteSection