import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 0;
  box-sizing: border-box;
  max-width: 1170px;
  margin: 0 auto;
`

function BaseLayout(props) {

  return(
    <Section>
      {props.children}
    </Section>
  )
}

export default BaseLayout