import React from 'react';
import { ColorSection } from '../styles/styles';


function PurpleSection(props) {
  return (
    <ColorSection>
      {props.children}
    </ColorSection>
  )
}

export default PurpleSection