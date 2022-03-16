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
  position: ${props => props.position};
  display: inline-block;
  font-family: DM Sans;
  font-size: ${props => props.fontSize || '1.25rem'};
  margin: ${props => props.margin};
  color: ${props => props.color || 'var(--Text)' };
  text-align: ${props => props.align || 'center' };
`
export const Container = styled.div`
  width: 100vw;
  margin: 0 auto;
`

export const Section = styled.section`
  position: relative;
  max-width: 1440px;
  margin: ${props=> props.margin ||'4rem auto'};
  padding: 0 var(--Page-margin);
  display: flex;
  justify-content: space-between;
  align-items: center;
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
    width: 26rem;
    padding: 2rem;
  }
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
  padding: 0.75rem;
  width: 14rem;
  border: 2px solid var(--Principal-purple);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
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






/* ------ PAGES ------ */
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




/* ------ Services ------ */
export const MachineAvatar = styled.img`
  max-height: 12rem;
`




/* ------ Testimonials ------ */
export const TestimonialSection = styled.section`
  max-width: 1440px;
  padding: 0 var(--Page-margin) ;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: var(--Text-to-image) auto;
`
export const Swiper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  &.services {
    gap: 2.5rem ;
  }
`

export const Testimonial = styled.div`
  max-width: 34rem;
  justify-content: center;
`

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1.125rem auto 0;
  padding: 0 2rem;
`

export const AvatarPicture = styled.img`
  max-width: 4.5rem;
`


/* ------ Injectables & Manuals ------ */
export const ProceduresTable = styled.ul`
  box-shadow: var(--Shadow);
`

export const Procedure = styled.li`
  text-decoration: none;
  list-style: none;
  font-size: 1.25rem;
  width: 25rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 0.35rem;
  border: 1px solid var(--Dark-purple);
  background: -webkit-linear-gradient(0deg, transparent 50%, var(--Principal-purple) 50%);
  background-size: 50rem 3.5rem;
  &:hover{
    transition: 0.8s;
    animation: ease-in;
    background-position: 25rem 0;
    color: white;
  }
`
export const TableLink = styled.a`
  text-decoration: none;
  color: var(--Text) ; 
` 