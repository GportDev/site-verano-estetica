import styled from "styled-components"

export const AccordionDiv = styled.div`
  margin-bottom: 2rem;
`

export const Wrap = styled.div`
  padding: 1rem;
  margin: 1rem 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;

  background: #f9f9f9;
  color: var(--Principal-purple);
  border-radius: 0.35rem;
  box-shadow: var(--Shadow);
  
  transition: transform 0.3s ease;
  cursor: pointer;

  h3 {
    font-size: 1.5rem;
  }

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
  padding: 1rem;
  background-color: #f9f9f9;
  color: var(--Text);
  border-radius: 0.35rem;

  transition: transform 0.3s ease;
  &:enabled {
    transform: translateY(1rem);
  }

  box-shadow: var(--Shadow);
`