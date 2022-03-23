import styled from 'styled-components';

export const MachineAvatar = styled.img`
  max-height: 12rem;
`


export const NameTitle = styled.h3`
  position: ${props => props.position};
  margin: ${props => props.margin};
  font-family: 'Poppins';
  font-weight: 400;
  font-style: normal;
  font-size: 1.75rem;
  line-height: 2.25rem;
  color: var(--Dark-purple);
`