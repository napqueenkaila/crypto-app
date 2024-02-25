import { createGlobalStyle } from "styled-components";

export const darkTheme = {
  body: "#13121a",
  text: "#ffffff",
  navbar: {
    backgroundColor: "#14142b",
    textColor: "#FFFFFF80", //grayed out - inactive page
    inputTextColor: "#D1D1D1",
    inputBackgroundColor: "#191925",
    selectTextColor: "#FFFFFFCC",
  },
  marketDataBar: {
    backgroundColor: "#1E1932",
    textColor: "#D1d1d1",
  },
};

export const lightTheme: ThemeType = {
  body: "#ffffff",
  text: "#353570",
  navbar: {
    backgroundColor: "#fff",
    textColor: "#353570",
    inputTextColor: "#424286",
    inputBackgroundColor: "#CCCCFA66",
    selectTextColor: "#424286CC",
  },
  marketDataBar: {
    backgroundColor: "#353570",
    textColor: "#D1D1D1",
  },
};

export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body{
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
`;

export type ThemeType = typeof darkTheme;
