import styled from "styled-components";

export const Popup = styled.div`
  position: fixed;
  padding: 1rem;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--Dark-purple-backgorund);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PopupInner = styled.section`
  margin-top: 2rem;
  padding: 2rem 3rem;
  max-width: 1170px;
  height: 75%;
  background-color: #f9f9f9;
  border-radius: 1rem;
  box-shadow: var(--Shadow);
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  ::-webkit-scrollbar{
    display: none;
  }

  @media(max-width: 800px) {
    padding: 2rem;
  }
`


export const PopupText = styled.p`
  position: ${props => props.position};
  margin-top: ${props => props.marginTop || '2rem'};
  margin-bottom: ${props => props.marginBottom};
  font-family: DM Sans;
  font-size: 1.20rem;
  color: var(--Text);
  text-align: left;
  &.imgList {
    line-height: 2rem;
  }

  strong {
    color: var(--Highlight-purple);
  }
  @media(max-width: 800px) {
    text-align: justify;
  }
`

export const QaDiv = styled.div`
  width: 100%;
`


export const PopupList = styled.ul`
  font-size: 1.25rem;
  list-style-position: inside;
`

export const PopupItem = styled.li`

`

export const Image = styled.img`
  max-width: 30rem;
  border-radius: 1rem;
  box-shadow: var(--Shadow);
  margin: 2rem auto;
  @media(max-width: 400px) {
    max-width: 100%;
  }
`