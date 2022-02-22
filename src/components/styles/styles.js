import styled from "styled-components";

/* ------ COMMOM ------ */
const Title = styled.h1`
  margin: 4rem 0 6rem;
  font-family: 'Poppins';
  font-weight: 500;
  font-style: normal;
  font-size: 3rem;
  line-height: 3rem;
  color: #23042F;
`
  
const Text = styled.p`
  display: inline-block;
  font-family: DM Sans;
  font-size: 1.125rem;
  line-height: 1.5rem;
  margin: 5rem 0 2rem;
  color: ${props => props.color || '#525252' };
`

const Card = styled.section`
  margin: 0 auto;
  padding: 0 2.75rem;
  background: #f9f9f9;
  width: ${props => props.width || '36rem'};
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.35);
  border-radius: 1rem;
  text-align: center;
`

const LogoVerano = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
  margin-top: ${props => props.marginTop};
  margin-left: ${props => props.marginLeft || 0};
`

const ButtonOutlined = styled.a`
  text-decoration: none;
  color: ${props => props.color || 'black'};
  margin: 0 0.5rem;
  background: none;
  padding: 0.75rem;
  width: 14rem;
  border: 2px solid #D465E7;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`
export {Title, Text, Card, LogoVerano, ButtonOutlined}

/* ------ SECTIONS ------ */
/* ------ Home ------ */

const HomeGradient = styled.section`
  height: 100%;
  padding: 2rem 0;
  background: linear-gradient(90deg, #D465E7 0%, #E2C9ED 37.5%, #F6E2D0 63.54%, #EB8A00 100%);
`

const ImagemInicial = styled.img`
  max-width: 30.62rem;
  margin-bottom: 3rem;
  border-radius: 1rem;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.35);
`

const Buttons = styled.nav`
  display: flex;
  justify-content: space-between;
`

export {HomeGradient, ImagemInicial, Buttons}
