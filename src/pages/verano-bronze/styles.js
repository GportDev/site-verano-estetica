import styled from "styled-components"

export const TanSection = styled.section`
  width: 100vw;
  max-width: 1440px;
  margin: ${props=> props.margin ||'4rem auto'};
  padding: 0 var(--Page-margin);
  display: flex;
  justify-content: space-between;
  align-items: center;
  &.content {
    align-items: flex-start;
    flex-direction: column;
  }
  &.moon_bath {
      padding: 0 6rem 0 0;
  }
  &.images {
    flex-direction: column;
  }
`

export const TanDiv = styled.div`
  display: flex;
  justify-content: space-between;
`

export const TanTitle = styled.h1`
  position: ${props => props.position};
  margin: ${props => props.margin};
  font-family: 'Poppins';
  font-weight: 700;
  font-style: bold;
  font-size: 3rem;
  line-height: 3.5rem;
  color: var(--Dark-orange);
`

export const TanSubtitle = styled.h2`
  position: ${props => props.position};
  margin: ${props => props.margin};
  font-family: 'Poppins';
  font-weight: ${props => props.fontWeight || '700'};
  font-style: bold;
  font-size: 2rem;
  line-height: ${props => props.lineHeight || '3.5rem'};
  color: var(--Dark-orange);
  &.SectionTitle {
    font-size: 2.5rem;
  }
`

export const TanH3 = styled.h3`
  margin-top: 2.65rem;
  margin-bottom: 2rem;
  font-size: 2.25rem;
  color: var(--Dark-purple);
  align-self: flex-start;
  &.first {
    margin-top: 0;
  }
`

export const TanText = styled.p`
  position: ${props => props.position};
  display: inline-block;
  font-family: DM Sans;
  font-size: ${props => props.fontSize || '1.20rem'};
  margin: ${props => props.margin};
  color: ${props => props.color || 'var(--Text)' };
  text-align: ${props => props.align || 'center' };
  strong {
    color: var(--Text-orange);
  }
`

export const TanButtonFilled = styled.a`
  text-decoration: none;
  color: ${props => props.color || 'black'};
  font-size: ${props => props.fontSize};
  margin: 0 auto;
  background: var(--Strong-orange);
  color: white;
  padding: 0.75rem 1.25rem;
  max-width: fit-content;
  border: 2px solid var(--Strong-orange);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  &.platform {
    position: absolute;
    bottom: 3rem;
    right: 4.9rem;
  }
`

export const CardImg = styled.img`
  width: 15rem;
  height: 15rem;
  margin-bottom: 3rem;
`

export const EmptyImg = styled.div`
  width: 15rem;
  height: 15rem;
  border-radius: 1rem;
  margin: 0 auto 3rem;
  background-color: #c4c4c4;
`

export const ResultImg = styled.img`
  max-height: 30rem;
  border-radius: 1rem;
  margin: 2rem;
  box-shadow: var(--Shadow);
  &.intro {
    max-width: 32rem;
    margin: 0;
  }
`

export const TanList = styled.ul`
  margin: 0 0 4rem;
  text-align: left;
  list-style-position: inside;
`

export const TanListLine = styled.li`
  font-size: 1.25rem;
  color: var(--Text);
  strong {
    color: var(--Highlight-purple);
  }
`
