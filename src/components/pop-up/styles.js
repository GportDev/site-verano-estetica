import styled from "styled-components";

export const Popup = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--Dark-purple-backgorund);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PopupInner = styled.section`
  position: relative;
  margin-top: 4rem;
  padding: 2rem 3rem;
  width: 100%;
  max-width: 65rem;
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
`