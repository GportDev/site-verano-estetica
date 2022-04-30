import styled from "styled-components";

export const PlatSection = styled.section`
  max-width: 1170px;
  margin: 4rem auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  &.content {
    flex-direction: column;
  }
`
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  @media(max-width: 800px) {
    flex-direction: column;
  }
`
export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0;
  padding: 0;
`

export const BenefitsList = styled.ul`
  margin: 4rem 0;
  text-align: left;
  list-style-position: inside;
`

export const UltraList = styled.div`
  align-self: flex-start;
  margin: 0 0 4rem;
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
  width: 30rem;
  height: 26rem;
  box-shadow: var(--Shadow);
`

export const ImgDiv = styled.div`
  display: flex;
  flex-direction: column;
  max-width: fit-content;
  margin: 0;
  padding: 0;
  text-align: center;
`

export const ThirdTitle = styled.h3`
  margin-top: 2.65rem;
  margin-bottom: 1.15rem;
  font-size: 2.25rem;
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