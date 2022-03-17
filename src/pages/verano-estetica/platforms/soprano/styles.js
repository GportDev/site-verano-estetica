import styled from "styled-components";

export const PlatSection = styled.section`
  max-width: 1440px;
  margin: 4rem auto;
  padding: 0 var(--Page-margin);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px dashed black;
  &.content {
    flex-direction: column;
  }
`

export const BenefitsList = styled.ul`
  margin: 4rem 0;
  text-align: left;
`
export const ListLine = styled.li`
  font-size: 1.25rem;
  color: var(--Text);
`

export const Equipment = styled.img`

`

export const ThirdTitle = styled.h3`
  margin-top: 2.65rem;
  margin-bottom: 1.15rem;
  font-size: 2.25rem;
  color: var(--Dark-purple);
  &.first {
    margin-top: 0;
  }
`
export const Video = styled.video`

`