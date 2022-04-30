import styled from 'styled-components';
import { FiMenu } from 'react-icons/fi';

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

export const Text = styled.p`
  font-family: DM Sans;
  font-size: var(--P);
  margin: 4rem auto;
  color: var(--Text);
  text-align: ${props => props.align || 'center' };
  
  strong {
    color: var(--Highlight-purple);
  }

  @media(max-width: 800px) {
    margin: 2rem auto;
  }
`

export const MenuHamb = styled(FiMenu)`
  color: ${props => props.color};
  width: 1.75rem;
  height: 1.75rem;
  cursor: pointer;
`