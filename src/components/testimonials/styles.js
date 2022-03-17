import styled from "styled-components";

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