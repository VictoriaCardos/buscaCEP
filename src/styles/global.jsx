import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root{
    --background: #d8dbe2;
    --content-background: #a9bcd0;
    --button-search: #58a4b0;
    --gray: #373f51;
    --text-body: #969CB3;
    --more-dark: #1b1b1e;
  }
  *{
    margin:0;
    padding: 0;
  }
  html{
    @media(max-width: 1080px){
      font-size: 93.75% //15px
    }
    @media(max-width: 720px){
      font-size: 87.5% //15px
    } 
  }
  body{
    background: var(--background);
    --webkit-font-smoothing: antialiased;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
  }

  body, input, textarea, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }
  h1,h2,h3,h4,h5,h6,strong{
    font-weight:600;
  }
  `
