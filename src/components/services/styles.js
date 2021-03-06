import styled from 'styled-components';
import { ButtonFilled } from '../styles/styles';

export const Card = styled.div`
  position: relative;

  margin: 0 auto;
  padding: 1rem;

  max-width: 20rem;
  height: 49rem;
  text-align: center;
  
  border-bottom: 10px solid var(--Principal-purple);
  border-radius: 1rem;

  background: #f9f9f9;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.35);

  @media(max-width: 400px) {
    max-width: 18rem;
  }
`
export const MachineAvatar = styled.img`
  max-height: 10rem;
`

export const ContentDiv = styled.div``

export const ButtonDiv = styled.div`
  display: flex;
  width: 90%;
  position: absolute;
  bottom: 2rem;
`

export const CardButton = styled(ButtonFilled)``

export const SubtitleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 6rem;
  margin-bottom: 2rem;
`

export const NameTitleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  margin: 1.5rem auto;
`

export const NameTitle = styled.h3`
  position: ${props => props.position};
  font-family: 'Poppins';
  font-weight: 400;
  font-style: normal;
  font-size: 1.75rem;
  line-height: 2rem;
  color: var(--Dark-purple);
`

export const Text = styled.p`
  font-family: DM Sans;
  font-size: var(--P);
  margin: 2rem auto;
  color: var(--Text);
  text-align: ${props => props.align || 'center' };
  
  strong {
    color: var(--Highlight-purple);
  }

  @media(max-width: 800px) {
    margin: 2rem auto;
  }
`