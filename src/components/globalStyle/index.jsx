import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
  /* COLORS */
  --Dark-purple: #23042f;
  --Dark-purple-backgorund: #23042f63;
  --Medium-purple: #721B94;
  --Highlight-purple: #D465E7;
  --Principal-purple: #D286DF;
  --Light-purple: #E2C9ED;

  --Dark-orange: #442800;
  --Text-orange: #EB8A00;
  --Strong-orange: #F5960E;
  --Skin-orange: #FDBB7C;
  --Pale-skin: #F6E2D0;

  --Text: #525252;
  
  --Background1: #f9f9f9;
  --Background2: rgba(256,256,265, 0.98);
  
  /* EFFECTS */
  --Shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);
  --Border-radius: 1rem;
  
  /* SIZES */
  --Large-screen: 1440px;
  --Section-margin: 5rem; /* 80px */
  --Text-to-image: 4rem; /* 64px */
  --Subtitle-to-text: 1.5rem; /* 24px */
  --To-button: 4rem; 
  --Page-padding: 1rem; /* 135px */
  
  /* TYPOGRAPHY */
  --H1: 2.5rem;
  --H2: 2.25rem;
  --H3: 1.8rem;
  --P: 1.15rem;
}
`