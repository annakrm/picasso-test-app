import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    display: flex;
    justify-content: center;

    background: #f2f2ec;
  }

  body {
    min-width: 600px;
    width: 100%;
    max-width: 1280px;
    background: transparent;
  }
`;

export const Wrapper = styled.div`
  padding: 24px;
`;
