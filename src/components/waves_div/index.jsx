import React from 'react';
import { ColorDiv, DownBackground, UpBackground } from '../styles/styles';
import UpPurpleWave from "../../assets/images/Background/Up-pink-wave.png"
import DownPurpleWave from "../../assets/images/Background/Down-pink-wave.png"
import UpOrangeWave from "../../assets/images/Background/Up-orange-wave.png"
import DownOrangeWave from "../../assets/images/Background/Down-orange-wave.png"

function WavesDiv(props) {
  return (props.orange) ? (
    <ColorDiv>
      <UpBackground src={UpOrangeWave}/>
        {props.children}
      <DownBackground src={DownOrangeWave}/>
    </ColorDiv>
  ) : (
    <ColorDiv>
      <UpBackground src={UpPurpleWave}/>
        {props.children}
      <DownBackground src={DownPurpleWave}/>
    </ColorDiv>
  )
}

export default WavesDiv