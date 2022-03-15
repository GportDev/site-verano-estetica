import React from 'react';
import { ColorSection, DownPurpleWaves, UpPurpleWaves } from '../styles/styles';
import UpWaves from "../../assets/images/Up-pink-wave.png"
import DownWaves from "../../assets/images/Down-pink-wave.png"

function PurpleSection(props) {
  return (
    <ColorSection>
      <UpPurpleWaves src={UpWaves}/>
      {props.children}
      <DownPurpleWaves src={DownWaves}/>
    </ColorSection>
  )
}

export default PurpleSection