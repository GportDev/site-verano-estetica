import React from 'react';
import { ColorDiv } from '../styles/styles';


function OrangeDiv(props) {
  return (
    <ColorDiv>
      {props.children}
    </ColorDiv>
  )
}

export default OrangeDiv