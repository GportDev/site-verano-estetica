import styled from "styled-components";

/* ------ Typography ------ */
export const Title = styled.h1`
  position: ${props => props.position};
  margin: ${props => props.margin};
  font-family: 'Poppins';
  font-weight: 700;
  font-size: var(--H1);
  line-height: 3.5rem;
  color: var(--Dark-purple);

  @media(max-width: 800px) {
    font-size: 2rem;
    line-height: 2.5rem;
    margin: 1rem 0;
  }
`

export const Subtitle = styled.h2`
  position: ${props => props.position};
  margin: ${props => props.margin};
  text-align: center;
  font-family: 'Poppins';
  font-weight: 600;
  font-size: var(--H2);
  line-height: 3rem;
  color: var(--Dark-purple);

  &.platform {
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

export const Text = styled.p`
  position: ${props => props.position};
  margin: ${props => props.margin};
  display: inline-block;
  font-family: DM Sans;
  font-size: ${props => props.fontSize || 'var(--P)'};
  color: ${props => props.color || 'var(--Text)' };
  text-align: ${props => props.align || 'center' };

  strong {
    color: var(--Highlight-purple);
  }
`


/* ------ Containers ------ */
export const Container = styled.div`
  margin: 0 auto;
`

export const Section = styled.section`
  max-width: 1170px;
  margin: ${props => props.margin ||'2rem auto'};
  padding: ${props => props.padding || "0 1rem"};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media(max-width: 800px) {
    flex-direction: column;;
  }
`

export const ColorDiv = styled.div`
  position: relative;
  padding: 1rem;
`

export const ColumnSection = styled.section`
  max-width: 1170px;
  margin: ${props=> props.margin ||'2rem auto'};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`
  
export const ContentSection = styled.div`
  max-width: 36rem;
  text-align: center;
`

export const SwiperDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const Card = styled.section`
  position: relative;
  margin: ${props => props.margin || '0 auto'};
  padding: ${props => props.padding || '0 2.75rem'};
  background: #f9f9f9;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.35);
  border-radius: 1rem;
  text-align: center;
  
  &.taning {
    border-bottom: 10px solid var(--Strong-orange);
  }
`



/* ------ Dividers------ */
export const OrangeDivider1 = styled.div`
  content: "";
  height: 3px;
  width: 100vw;
  background: linear-gradient(270deg, #F7A22A 0%, rgba(246, 226, 208, 0.2) 100.83%);
  opacity: 30%;
`
export const OrangeDivider2 = styled.div`
  content: "";
  height: 3px;
  width: 100vw;
  background: linear-gradient(90deg, #F7A22A 0%, rgba(246, 226, 208, 0.2) 100.8%);
  opacity: 30%;
`
export const PurpleDivider1 = styled.div`
  content: "";
  height: 3px;
  width: 100vw;
  background: linear-gradient(270deg, #D286DF 0%, rgba(250, 245, 252, 0.2) 100.83%);
  opacity: 30%;
`
export const PurpleDivider2 = styled.div`
  content: "";
  height: 3px;
  width: 100vw;
  background: linear-gradient(90deg, #D286DF 0%, rgba(250, 245, 252, 0.2) 100.8%);
  opacity: 30%;
`


/* ------ Images and Icons ------ */
export const LogoVerano = styled.img`
  margin: ${props => props.margin};
  height: 3rem;
  width: 6.56rem;
`
  
export const Imagem = styled.img`
  width: ${props => props.width} ;
  max-width: 36rem;
  border-radius: 1rem;
  box-shadow: ${props => props.shadow || '0px 0px 12px rgba(0, 0, 0, 0.35)'};
`

export const UpBackground = styled.img`
  position: absolute;
  opacity: 60%;
  z-index: -1;
  top: 0;
  right: 0;
  max-width: fit-content;
  width: 46rem;
  overflow: hidden;
  @media(max-width: 800px) {
    width: 90%;
  }
`

export const DownBackground = styled.img`
  position: absolute;
  opacity: 60%;
  z-index: -1;
  bottom: 0;
  left: 0;
  max-width: fit-content;
  width: 46rem;
  overflow: hidden;
  @media(max-width: 800px) {
    width: 90%;
  }
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
  font-size: 1.25rem;

  margin: 0 auto;
  padding: 0.75rem 1.25rem;
  max-width: fit-content;

  background: var(--Principal-purple);
  color: white;
  border: 2px solid var(--Principal-purple);
  border-radius: 0.5rem;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.35);

  display: flex;
  align-items: center;
  justify-content: center;

  &.platform {
    align-self: flex-end;
    margin: 0 auto
  }
`