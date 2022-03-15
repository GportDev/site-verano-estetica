import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{

  /* COLORS */
  --Dark-purple: #23042F;
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
  --Shadow: 2px 2px 6px rgba(0, 0, 0, 0.25), inset 2px 2px 6px rgba(208, 208, 208, 0.25); ;
  --Border-radius: 1rem;


  /* SIZES */
  --Large-screen: 1440px;
  --Section-margin: 5rem;
  --Text-to-image: 4rem;
  --Subtitle-to-text: 1.5rem;
  --To-button: 4rem;
  --Page-margin: 8.45rem;
}
`