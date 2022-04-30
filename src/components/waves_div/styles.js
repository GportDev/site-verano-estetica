import styled from "styled-components";


export const UpWaves = styled.img`
  position: absolute;
  opacity: 60%;
  max-width: 50%;
  right: 0;
  top: 0;
  z-index: -2;
  @media(max-width: 600px) {
    max-width: 70%;
  }
`

export const DownWaves = styled.img`
  position: absolute;
  opacity: 60%;
  max-width: 50%;
  left: 0;
  bottom: 0;
  z-index: -2;
  @media(max-width: 600px) {
    max-width: 70%;
  }
`