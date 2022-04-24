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
  &.platform {
    line-height: 2rem;
    font-weight: 600;
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
  padding: 3rem;
  width: 100vw;
`

export const ColumnSection = styled.section`
  width: 100vw;
  max-width: 1440px;
  margin: ${props=> props.margin ||'4rem auto'};
  padding: 0 var(--Page-margin);
  display: flex;
  flex-direction: column;
  align-items: center;
`
  
export const ContentSection = styled.div`
  max-width: 32rem;
  text-align: center;
`

export const SwiperDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`

export const Card = styled.section`
  position: relative;
  margin: ${props => props.margin || '0 auto'};
  padding: ${props => props.padding || '0 2.75rem'};
  background: #f9f9f9;
  width: ${props => props.width || '36rem'};
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.35);
  border-radius: 1rem;
  text-align: center;
  &.service {
    width: 20rem;
    height: 48rem;
    padding: 2rem 1rem;
    border-bottom: 10px solid var(--Principal-purple);
  }
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

export const Icon = styled.img`
  margin: 0 1rem 0 0;
  width: 2rem;
  height: 2rem;
  &.wpp {
    width: 2.5rem;
    height: 2.5rem;
  }
  &.arrow{
    margin: auto;
    width: 3rem;
    height: 2rem;
  }
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
  &.platform {
    position: absolute;
    bottom: 3rem;
    right: 4.9rem;
  }
`