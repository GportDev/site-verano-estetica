import styled from "styled-components"
import {FaWhatsapp} from "react-icons/fa"
import { FiX } from "react-icons/fi"

export const MenuContainer = styled.div`
  margin: 12rem 0;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Logo = styled.img`
  max-width: 85%;
  margin-right: 2rem;
`

export const Title = styled.h2`
  margin: 2rem auto;
  font-size: var(--H2);
  font-weight: 700;
  line-height: 2.25rem;
  text-align: center;
  color: ${props => props.color};
`

export const CTA = styled.button`
  width: 65%;
  padding: 1rem;
  color: #FFF;
  background-color: ${props => props.color} ;
  font-size: var(--P);
  border-radius: 0.5rem;
  border: none;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-evenly;
`

export const WPP = styled(FaWhatsapp)`
  font-size: 1.35rem;
  color: ${props => props.color};
`

export const OutIcon = styled(FiX)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 2rem;
  color: black;
`