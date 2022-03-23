import styled from "styled-components";

/* ------ COMMOM ------ */
export const Title = styled.h1`
  position: ${props => props.position};
  margin: ${props => props.margin};
  font-family: 'Poppins';
  font-weight: 700;
  font-style: bold;
  font-size: 3rem;
  line-height: 3.5rem;
  color: var(--Dark-purple);
`

export const Subtitle = styled.h2`
  position: ${props => props.position};
  margin: ${props => props.margin};
  font-family: 'Poppins';
  font-weight: 700;
  font-style: bold;
  font-size: 2rem;
  line-height: 3.5rem;
  color: var(--Dark-purple);
  &.SectionTitle {
    font-size: 2.5rem;
  }
  &.PopupSubtitle {
    margin: 1rem 0;
    font-size: 2rem;
    font-weight: 500;
  }
`

export const Text = styled.p`
  position: ${props => props.position};
  display: inline-block;
  font-family: DM Sans;
  font-size: ${props => props.fontSize || '1.20rem'};
  margin: ${props => props.margin};
  color: ${props => props.color || 'var(--Text)' };
  text-align: ${props => props.align || 'center' };
  strong {
    color: var(--Highlight-purple);
  }
`

export const Container = styled.div`
  width: 100vw;
  margin: 0 auto;
  &.image {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 0;
    padding: 0;
  }
`

export const Section = styled.section`
  width: 100vw;
  max-width: 1440px;
  margin: ${props=> props.margin ||'4rem auto'};
  padding: 0 var(--Page-margin);
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ColorDiv = styled.div`
  position: relative;
  width: 100vw;
  display: flex;
  flex-direction: column;
`

export const ColumnSection = styled.section`
  width: 100vw;
  max-width: 1440px;
  margin: 4rem auto;
  padding: 0 var(--Page-margin);
  display: flex;
  flex-direction: column;
  align-items: center;
`
  
export const ContentSection = styled.div`
  max-width: 32rem;
  text-align: center;
`

export const Card = styled.section`
  margin: ${props => props.margin || '0 auto'};
  padding: ${props => props.padding || '0 2.75rem'};
  background: #f9f9f9;
  width: ${props => props.width || '36rem'};
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.35);
  border-radius: 1rem;
  text-align: center;
  &.service {
    width: 24rem;
    padding: 2rem;
    border-bottom: 10px solid var(--Principal-purple);
  }
  &.taning {
    border-bottom: 10px solid var(--Strong-orange);
  }
`

/* ------ Images and Icons ------ */
export const LogoVerano = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
  margin-top: ${props => props.marginTop};
  margin-left: ${props => props.marginLeft || 0};
`
  
export const Imagem = styled.img`
  width: ${props => props.width} ;
  max-width: 36rem;
  border-radius: 1rem;
  box-shadow: ${props => props.shadow || '0px 0px 12px rgba(0, 0, 0, 0.35)'};
`

export const Icon = styled.svg`
  width: 2rem;
  height: 2rem;
`



/* ------ Buttons ------ */
export const ButtonOutlined = styled.a`
  text-decoration: none;
  color: ${props => props.color || 'black'};
  margin: 0 0.5rem;
  background: none;
  padding: 0.75rem;
  width: 14rem;
  border: 2px solid var(--Principal-purple);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ButtonFilled = styled.a`
  text-decoration: none;
  color: ${props => props.color || 'black'};
  font-size: ${props => props.fontSize};
  margin: 0 auto;
  background: var(--Principal-purple);
  color: white;
  padding: 0.75rem 1.25rem;
  max-width: fit-content;
  border: 2px solid var(--Principal-purple);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`