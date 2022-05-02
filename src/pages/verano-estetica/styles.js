import styled from "styled-components";

export const PlatSection = styled.section`
  max-width: 1170px;
  margin: 2rem auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  &.content {
    flex-direction: column;
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
export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  &.multi-images {
    flex-direction: column;
  }
  @media(max-width: 800px) {
    flex-direction: column;
  }
`

export const BenefitsList = styled.ul`
  margin: 2rem 0;
  text-align: left;
  list-style-position: inside;
  align-self: flex-start;
`

export const ListLine = styled.li`
  font-size: 1.25rem;
  color: var(--Text);
  strong {
    color: var(--Highlight-purple);
  }
`

export const Equipment = styled.img`
  &.inkie{
    margin: 2rem 0;
    width: 24rem;
    transform: scaleX(-1);
  }
  &.ultraformer{
    transform: scaleX(-1);
  }
  &.etherea {
    width: 13rem;
  }
`

export const Picture  = styled.img`
  border-radius: var(--Border-radius);
  max-width: 32rem;
  box-shadow: var(--Shadow);
  @media(max-width: 800px) {
    max-width: 100%;
  }
`

export const ImgDiv = styled.div`
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  text-align: center;
`

export const ThirdTitle = styled.h3`
  margin-top: 2.65rem;
  margin-bottom: 1rem;
  font-size: 2.25rem;
  line-height: 2.5rem;
  color: var(--Dark-purple);
  align-self: flex-start;
  &.first {
    margin-top: 0;
  }
`
export const Video = styled.video`
  max-width: 100%;
  border-radius: 1rem;
  box-shadow: var(--Shadow);
`