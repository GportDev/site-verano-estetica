import styled from "styled-components";

export const ProceduresTable = styled.ul`
  box-shadow: var(--Shadow);
`

export const Procedure = styled.li`
  text-decoration: none;
  list-style: none;
  font-size: 1.25rem;
  width: 25rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 0.35rem;
  border: 1px solid var(--Dark-purple);
  background: -webkit-linear-gradient(0deg, transparent 50%, var(--Principal-purple) 50%);
  background-size: 50rem 3.5rem;
  &:hover{
    transition: 0.8s;
    animation: ease-in;
    background-position: 25rem 0;
    color: white;
  }
`
export const TableLink = styled.a`
  text-decoration: none;
  color: var(--Text) ; 
` 