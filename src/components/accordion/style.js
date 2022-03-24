import styled from "styled-components"

export const AccordionDiv = styled.div`
  position: relative;
  height: 100%;
  margin-bottom: 2rem;
`

export const Container = styled.div`
  position: absolute;
  top: 0;
`

export const Wrap = styled.div`
  background: #f9f9f9;
  color: var(--Principal-purple);
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 0.25rem;
  box-shadow: var(--Shadow);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: left;
  transition: transform 0.3s ease;
  cursor: pointer;

  span {
    margin-right: 1.5rem;
    transition: transform 0.2s;
    transition-delay: -0.05s;
  }  

  &:active{
    transform: translateY(-0.7rem);
    span {
      transform: rotate(90deg);
    }
  }

`
export const Dropdown = styled.div`
  background-color: #f9f9f9;
  color: var(--Text);
  padding: 1rem;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transition: transform 0.3s ease;
  &:enabled {
    transform: translateY(1rem);
  }

  box-shadow: var(--Shadow);
`