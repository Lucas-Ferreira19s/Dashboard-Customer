import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    &::-webkit-scrollbar {
      width: 0.6rem;
      background-color: ${({ theme }) => theme.colors.gray100};
      border: none;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.yellow300};
      border-radius: 0.5rem;
    }
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: ${({ theme }) => theme.colors.gray100} !important;
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  select,
  textarea,
  button {
    font: 400 1rem 'Poppins', Helvetica, Arial, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  ul,
  li {
    list-style: none;
  }
  
`
