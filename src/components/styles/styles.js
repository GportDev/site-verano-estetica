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
  font-size: 3rem;
  line-height: 3.5rem;
  color: var(--Dark-purple);
`

export const Text = styled.p`
  position: ${props => props.position};
  display: inline-block;
  font-family: DM Sans;
  font-size: 1.125rem;
  margin: ${props => props.margin};
  color: ${props => props.color || 'var(--Text)' };
  text-align: ${props => props.align || 'center' } ;
`

export const Section = styled.section`
  position: relative;
  max-width: 1440px;
  margin: 4rem auto;
  padding: 0 var(--Page-margin);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.background} ;
`

export const ColorSection = styled.section`
  position: relative;
  width: 100vw;
  display: flex;
  flex-direction: column;
`

export const ColumnSection = styled.section`
  z-index: 10;
  max-width: 1440px;
  margin: 4rem auto;
  padding: 0 var(--Page-margin);
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const UpPurpleWaves = styled.img`
  position: absolute;
  opacity: 60%;
  width: 50%;
  right: 0;
  top: 0;
`

export const DownPurpleWaves = styled.img`
  position: absolute;
  opacity: 60%;
  width: 50%;
  left: 0;
  bottom: 0;
`

export const UpOrangeWaves = styled.img`
  opacity: 60%;
  width: 50%;
  align-self: flex-end;
`

export const DownOrangeWaves = styled.img`
  opacity: 60%;
  width: 50%;
  align-self: flex-start;
`

export const ContentSection = styled.div`
  max-width: 32rem;
  text-align: center;
`

export const Card = styled.section`
  margin: 0 auto;
  padding: 0 2.75rem;
  background: #f9f9f9;
  width: ${props => props.width || '36rem'};
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.35);
  border-radius: 1rem;
  text-align: center;
`

export const LogoVerano = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
  margin-top: ${props => props.marginTop};
  margin-left: ${props => props.marginLeft || 0};
`

export const ButtonOutlined = styled.a`
  text-decoration: none;
  color: ${props => props.color || 'black'};
  margin: 0 0.5rem;
  background: none;
  padding: 0.75rem;
  width: 14rem;
  border: 2px solid #D286DF;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ButtonFilled = styled.a`
  text-decoration: none;
  color: ${props => props.color || 'black'};
  margin: 0 auto;
  background: #D286DF;
  color: white;
  padding: 0.75rem;
  width: 14rem;
  border: 2px solid #D286DF;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Imagem = styled.img`
  width: ${props => props.width} ;
  max-width: 36rem;
  border-radius: 1rem;
  box-shadow: ${props => props.shadow || '0px 0px 12px rgba(0, 0, 0, 0.35)'};
`

export const List = styled.ul`
  text-decoration: none;
  list-style: none;
  text-align: left;
  line-height: 4rem;
`

export const ListItem = styled.li`
  font-size: 1.5rem;
`

/* ------ SECTIONS ------ */
/* ------ Home ------ */

export const HomeGradient = styled.section`
  height: 100%;
  padding: 2rem 0;
  background: linear-gradient(90deg, #D465E7 0%, #E2C9ED 37.5%, #F6E2D0 63.54%, #EB8A00 100%);
`

export const ImagemInicial = styled.img`
  max-width: 30.62rem;
  margin-bottom: 3rem;
  border-radius: 1rem;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.35);
`

export const Buttons = styled.nav`
  display: flex;
  justify-content: space-between;
`
