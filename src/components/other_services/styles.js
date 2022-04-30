import styled from "styled-components";

export const ProceduresTable = styled.ul`
  margin: 1rem auto;
`

export const Procedure = styled.li`
  padding: 1rem;
  margin: 0.25rem 0;
  text-decoration: none;
  list-style: none;
  font-size: 1.25rem;
  width: 25rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  border-radius: 0.35rem;
  border: 1px solid rgba(35, 4, 47, 0.5);
  background: -webkit-linear-gradient(0deg, transparent 50%, var(--Principal-purple) 50%);
  background-size: 50rem 3.5rem;
  &:hover{
    transition: 0.8s;
    animation: ease-in;
    background-position: 25rem 0;
    color: white;
  }
  @media(max-width: 900px){
    width: 20rem;
  }
`
export const TableLink = styled.a`
  text-decoration: none;
  color: var(--Text) ;
  cursor: pointer;
` 