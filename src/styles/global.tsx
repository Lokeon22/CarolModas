import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  body{
    background-color: white;
    color: gold;
  }

  body, input, button, textarea{
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    outline: none;
  }

  a{
    text-decoration: none;
  }

  button, a{
    cursor: pointer;
  }
  
`;
