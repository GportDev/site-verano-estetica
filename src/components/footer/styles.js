import styled from "styled-components";

export const FooterBody = styled.footer`
  margin: 0 auto;
  padding: 1.5rem 0;
  min-height: 6rem;
  background: var(--Principal-purple);
  &.orange {
    background: var(--Skin-orange);
  }
`

export const FooterWrapper = styled.div`
  max-width: 1170px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  @media(max-width: 800px) {
    flex-direction: column;
    padding: 2rem;
  }
`

export const Text = styled.p`
  font-family: DM Sans;
  font-size: 1.2rem;
  color: #FFF;
  text-align: center;
  strong {
    color: var(--Highlight-purple);
  }
  @media(max-width: 800px) {
    margin: 2rem auto;
  }
`

export const IconDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`

export const Icon = styled.img`
  width: 3.25rem;
  height: 3.25rem;
`