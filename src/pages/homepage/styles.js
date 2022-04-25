import styled from "styled-components";
import { ButtonOutlined, Text, Title } from "../../components/styles/styles";
import { FiChevronLeft, FiChevronRight  } from "react-icons/fi"


/* ------ Sections ------ */
export const HomeGradient = styled.section`
  padding: 1rem 1rem;
  background: linear-gradient(90deg, #D465E7 0%, #E2C9ED 37.5%, #F6E2D0 63.54%, #EB8A00 100%);
`

export const HomeCard = styled.section`
  margin: 0 auto;
  padding: 2rem;
  background: #f9f9f9;
  max-width: 36rem;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.35);
  border-radius: 1rem;
  text-align: center;
`


/* ------ Typography ------ */
export const HomeTitle = styled(Title)`
  margin: 2rem 0;
  font-size: var(--H1);
  line-height: 2.5rem;

  @media(max-width: 800px) {
    font-size: 2rem;
    margin: 1.5rem 0;
  }
` 

export const HomeText = styled(Text)`
  @media(max-width: 800px) {
    font-size: 1rem;
  }
`

/* ------ Images ------ */
export const HomeImage = styled.img`
  max-width: 95%;
  margin: 2rem auto;
  border-radius: 1rem;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.35);
`

export const HomeLogo = styled.img`
  max-width: 65%;
  margin: 0 auto 2rem;
`

/* ------ Icons ------ */
export const ChevronLeft = styled(FiChevronLeft)`

`
export const ChevronRight = styled(FiChevronRight)`

`


/* ------ Buttons ------ */
export const Buttons = styled.nav`
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const HomeButton = styled(ButtonOutlined)`
  text-decoration: none;
  color: black;
  margin: 0.5rem auto;
  background: none;
  padding: 0.75rem;
  width: 14rem;
  border: 2px solid var(--Principal-purple);
  border-radius: 0.5rem;
  justify-content: space-evenly;
`
