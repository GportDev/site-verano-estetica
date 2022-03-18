import React from 'react';
import { ColorDiv } from '../styles/styles';


function PurpleDiv(props) {
  return (
    <ColorDiv>
      {props.children}
    </ColorDiv>
  )
}

export default PurpleDiv