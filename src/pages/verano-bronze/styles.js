import styled from "styled-components"

/* ------ Containers ------ */
export const TanSection = styled.section`
  max-width: 1170px;
  margin: ${props => props.margin ||'2rem auto'};
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &.content {

    flex-direction: column;
  }

  &.moon_bath {
      padding: 0 6rem 0 0;
  }

  &.images {
    flex-direction: column;
  }
`

export const Section = styled.section`
  max-width: 1170px;
  margin: ${props => props.margin ||'2rem auto'};
  padding: ${props => props.padding || "0 1rem"};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media(max-width: 800px) {
    flex-direction: column;
  }
`

export const TanDiv = styled.div`
  padding: 0 1rem;
`

export const ContentSection = styled.div`
  max-width: 36rem;
  text-align: center;
  &.intro {
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-end;
  }
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media(max-width: 800px) {
    flex-direction: column;
  }
`

export const Card = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  margin: 0 auto;
  padding: 2rem 1rem;

  max-width: 20rem;
  height: 40rem;
  text-align: center;

  border-bottom: 10px solid var(--Strong-orange);
  border-radius: 1rem;

  background: #f9f9f9;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.35);

  @media(max-width: 400px) {
    max-width: 18rem;
  }
`

/* ------ Typography ------ */
export const TanTitle = styled.h1`
  position: ${props => props.position};
  margin: ${props => props.margin};
  font-family: 'Poppins';
  font-weight: 700;
  font-size: var(--H1);
  line-height: 3.5rem;
  color: var(--Dark-orange);
  text-align: center;

  @media(max-width: 800px) {
    font-size: 2rem;
    line-height: 2.5rem;
    margin: 1rem 0;
  }
`

export const TanSubtitle = styled.h2`
  position: ${props => props.position};
  margin: ${props => props.margin};
  text-align: center;
  font-family: 'Poppins';
  font-weight: 600;
  font-size: var(--H2);
  line-height: 3rem;
  color: var(--Dark-orange);

  &.SectionTitle {
    font-size: var(--H2);
    line-height: 2rem;
  }

  &.CardTitle {
    font-size: var(--H3);
    line-height: 2rem;
  }

  @media(max-width: 800px) {
    &.SectionTitle {
      font-size: var(--H3);
      line-height: 2.5rem;
    }
  }
`

export const TanH3 = styled.h3`
  margin-top: 2.65rem;
  margin-bottom: 2rem;
  font-size: var(--H3);
  color: var(--Dark-purple);
  align-self: flex-start;
  &.first {
    margin-top: 0;
  }
  &.section {
    text-align: left;
  }
`

export const TanText = styled.p`
  position: ${props => props.position};
  margin: ${props => props.margin};
  display: inline-block;
  font-family: DM Sans;
  font-size: ${props => props.fontSize || 'var(--P)'};
  color: ${props => props.color || 'var(--Text)' };
  text-align: ${props => props.align || 'center' };
  strong {
    color: var(--Text-orange);
  }
`


/* ------ Buttons ------ */
export const TanButtonFilled = styled.a`
  text-decoration: none;
  font-size: ${props => props.fontSize};
  
  color: white;
  background: var(--Strong-orange);
  
  margin: 0 auto;
  padding: 0.75rem 1.25rem;
  max-width: fit-content;

  border: 2px solid var(--Strong-orange);
  border-radius: 0.5rem;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.35);

  display: flex;
  align-items: center;
  justify-content: center;
`


/* ------ Images ------ */
export const CardImg = styled.img`
  width: 15rem;
  height: 15rem;
  margin-bottom: 2rem;
`

export const InicialImage = styled.img`
  max-width: 70%;
  border-radius: 1rem;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.35);
  @media(max-width: 800px) {
    margin: 4rem auto 1rem;
  }
`

export const ResultImg = styled.img`
  max-width: 30rem;
  border-radius: 1rem;
  margin: 2rem;
  box-shadow: var(--Shadow);
  &.intro {
    max-width: 32rem;
    margin: 0;
  }
  &.experience {
    margin: 0 auto 0 2rem;
  }

  @media(max-width: 800px) {
    margin: 4rem auto 2rem;
    max-width: 100%;
    &.experience {
    margin: 0 auto;
  }
  }
`

/* ------ Lists ------ */
export const TanList = styled.ul`
  margin: 0 0 4rem;
  text-align: left;
  list-style-position: inside;
  align-self: flex-start;
`

export const TanListLine = styled.li`
  font-size: 1.25rem;
  color: var(--Text);
  strong {
    color: var(--Highlight-purple);
  }
`
