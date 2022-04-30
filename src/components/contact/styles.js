import styled from "styled-components";
import { FiPhone, FiMail, FiMapPin} from 'react-icons/fi'
import {FaWhatsapp} from 'react-icons/fa'

/* ------ Lists ------ */
export const List = styled.ul`
  text-decoration: none;
  list-style: none;
  text-align: left;
  line-height: 4rem;
`

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  line-height: ${props => props.lineHeight};
  @media(max-width: 800px) {
    font-size: 1.2rem;
  }
`

export const ContentSection = styled.div`
  margin: 2rem auto;
  max-width: 38rem;
  text-align: center;
`

export const Section = styled.section`
  width: 100%;
  margin: 4rem auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media(max-width: 800px) {
    flex-direction: column;
  }
`

export const Phone = styled(FiPhone)`
  margin-right: 1rem;
  font-size: 2rem;
  color: ${props => props.color};
`
export const Mail = styled(FiMail)`
  margin-right: 1rem;
  font-size: 2rem;
  color: ${props => props.color};
`
export const Pin = styled(FiMapPin)`
  margin-right: 1rem;
  font-size: 2rem;
  color: ${props => props.color};
`
export const Whatsapp = styled(FaWhatsapp)`
  margin-right: 1rem;
  font-size: 2rem;
  color: white;
` 
