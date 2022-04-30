import styled from "styled-components";

export const TestimonialSection = styled.section`
  max-width: 1170px;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: var(--Text-to-image) auto;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Imagem = styled.img`
  margin: 0 auto;
  max-width: 32rem;
  border-radius: 1rem;
  box-shadow: ${props => props.shadow || '0px 0px 12px rgba(0, 0, 0, 0.35)'};
  @media(max-width: 800px) {
    max-width: 100%;
  }
`

export const SwiperDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media(max-width: 800px) {
    flex-direction: column;
  }
`

export const Card = styled.section`
  margin: 1rem auto;
  padding: 1.5rem;
  background: #f9f9f9;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.35);
  border-radius: 1rem;
  text-align: center;
  max-width: 28rem;
  @media(max-width: 800px) {
    max-width: 85%;
    margin: 1rem auto 6rem;
  }
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