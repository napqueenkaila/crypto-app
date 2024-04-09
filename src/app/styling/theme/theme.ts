import { createGlobalStyle } from "styled-components";

export const darkTheme = {
  body: "#13121a",
  text: "#ffffff",
  navbar: {
    backgroundColor: "#14142b",
    inactiveTextColor: "#FFFFFF80",
    inputTextColor: "#D1D1D1",
    inputBackgroundColor: "#191925",
    dropDownBackgroundColor: "#191925",
    selectTextColor: "#FFFFFFCC",
  },
  marketDataBar: {
    backgroundColor: "#1E1932",
    textColor: "#D1d1d1",
  },
  sliderButton: {
    containerBackground: "#191925",
    backgroundColor: "#232336",
    activeBackgroundColor: "#6161D680",
    inactiveTextColor: "#FFFFFF",
    activeTextColor: "#FFFFFF",
  },
  charts: {
    legendTitleColor: "#D1D1D1",
    legendValueColor: "#FFFFFF",
    legendDateColor: "#B9B9BA",
    lineBackgroundColor: "#191932",
    barBackgroundColor: "#1E1932",
  },
  coinPage: {
    blockBackgroundColor: "#1e1932",
    textColor: "#FFFFFFF",
  },
  carousel: {
    cardBackgroundColor: "#191925",
    coinTextColor: "#FFFFFF",
    priceTextColor: "#D1D1D1",
  },
};

export const lightTheme: ThemeType = {
  body: "#ebebeb",
  text: "#353570",
  navbar: {
    backgroundColor: "#fff",
    inactiveTextColor: "#35357080",
    inputTextColor: "#424286",
    inputBackgroundColor: "#CCCCFA66",
    dropDownBackgroundColor: "#CCCCFA",
    selectTextColor: "#424286CC",
  },
  marketDataBar: {
    backgroundColor: "#353570",
    textColor: "#D1D1D1",
  },
  sliderButton: {
    containerBackground: "#FFFFFF",
    backgroundColor: "#FFFFFF",
    activeBackgroundColor: "#7878FA80",
    inactiveTextColor: "#424286",
    activeTextColor: "#FFFFFF",
  },
  charts: {
    legendTitleColor: "#191932",
    legendValueColor: "#181825",
    legendDateColor: "#424286",
    lineBackgroundColor: "#ffffff",
    barBackgroundColor: "#ffffff",
  },
  coinPage: {
    blockBackgroundColor: "#FFFFFF",
    textColor: "#353570",
  },
  carousel: {
    cardBackgroundColor: "#FFFFFF",
    coinTextColor: "#181825",
    priceTextColor: "#424286",
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
