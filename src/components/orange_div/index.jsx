import React from 'react';
import { DownBackground, UpBackground, ColorDiv } from '../styles/styles';
import UpWave from "../../assets/images/Background/Up-orange-wave.png"
import DownWave from "../../assets/images/Background/Down-orange-wave.png"

function OrangeDiv(props) {
  return (
    <ColorDiv>
      <UpBackground src={UpWave}/>
        {props.children}
      <DownBackground src={DownWave}/>
    </ColorDiv>
  )
}

export default OrangeDiv