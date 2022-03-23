import React from 'react';
import { ColorDiv, DownBackground, UpBackground } from '../styles/styles';
import UpWave from "../../assets/images/Background/Up-pink-wave.png"
import DownWave from "../../assets/images/Background/Down-pink-wave.png"

function PurpleDiv(props) {
  return (
    <ColorDiv>
      <UpBackground src={UpWave}/>
        {props.children}
      <DownBackground src={DownWave}/>
    </ColorDiv>
  )
}

export default PurpleDiv