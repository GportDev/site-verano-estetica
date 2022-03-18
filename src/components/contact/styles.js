import styled from "styled-components";

/* ------ Lists ------ */
export const List = styled.ul`
  text-decoration: none;
  list-style: none;
  text-align: left;
  line-height: 4rem;
`

export const ListItem = styled.li`
  font-size: 1.5rem;
  line-height: ${props => props.lineHeight};
`

export const ContentSection = styled.div`
  max-width: 40rem;
  text-align: center;
`

export const Section = styled.section`
  width: 100%;
  margin: 4rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
