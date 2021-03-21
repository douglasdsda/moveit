import { createGlobalStyle, css } from "styled-components";
 

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
  padding: 0;
  box-sizing: border-box;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :root {
  --white:#fff;
  --background: #F2F3F5;
  --gray-line: #DCDDE0;
  --text: #666666;
  --text-highlight: #B3B9FF;
  --title: #2E384D;
  --red: #E83F5B;
  --green: #4CD62B;
  --blue: #5965E0;
  --blue-dark: #4953B8;
  --blue-twitter: #2AA9E0;
  --blue01: #5965E0;
  --blue02: #4953B8;
  --text-blue: #B2B9FF;
  --texts: #666666;
  --linear: #4953B8;

  }


  body {
  background: var(--background);
  color: var(--text);
}

@media(max-width: 1080px){
  html {
    font-size: 93.75%;
  }
}

@media(max-width: 720px){
  html {
    font-size: 87.5%;
  }
}

body, input , textarea, button {
  font: 400 1rem "Inter", sans-serif;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}
 
  
`;
export default GlobalStyles;
