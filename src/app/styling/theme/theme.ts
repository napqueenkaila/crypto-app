import { createGlobalStyle } from "styled-components";

const colors = {
  white: "#FFFFFF",
  transparentWhite: "#FFFFFF80",
  gray: "#D1D1D1",
  lightGray: "#EBEBEB",
  silver: "#B9B9BA",
  richBlack: "#13121a",
  raisinBlack: "#191925",
  oxfordBlue: "#14142b",
  delftBlue: "#353570",
  transparentDelftBlue: "#35357080",
  darkPurple: "#1E1932",
  spaceCadet: "#232336",
  transparentSlateBlue: "#6161D680",
  mediumSlateBlue: "#7878FA80",
  marianBlue: "#424286",
  transparentMarianBlue: "#424286CC",
  periwinkle: "#CCCCFA",
  transparentPeriwinkle: "#CCCCFA66"
};

export const darkTheme = {
  body: colors.richBlack,
  text: colors.white,
  navbar: {
    backgroundColor: colors.oxfordBlue,
    inactiveTextColor: colors.transparentWhite,
    inputTextColor: colors.gray,
    inputBackgroundColor: colors.raisinBlack,
    dropDownBackgroundColor: colors.raisinBlack,
    selectTextColor: colors.transparentWhite,
  },
  marketDataBar: {
    backgroundColor: colors.darkPurple,
    textColor: colors.gray,
  },
  sliderButton: {
    containerBackground: colors.raisinBlack,
    backgroundColor: colors.spaceCadet,
    activeBackgroundColor: colors.transparentSlateBlue,
    inactiveTextColor: colors.white,
    activeTextColor: colors.white,
  },
  charts: {
    legendTitleColor: colors.gray,
    legendValueColor: colors.white,
    legendDateColor: colors.silver,
    chartBackgroundColor: colors.darkPurple,
    rangeBackgroundColor: colors.spaceCadet,
    selectedRangeColor: colors.transparentSlateBlue,
  },
  coinPage: {
    blockBackgroundColor: colors.darkPurple,
    textColor: colors.white,
  },
  carousel: {
    cardBackgroundColor: colors.raisinBlack,
    selectedCardBackgroundColor: colors.transparentSlateBlue,
    coinTextColor: colors.white,
    priceTextColor: colors.gray,
  },
  table: {
    headerTextColor: colors.gray,
    coinRowBackgroundColor: colors.raisinBlack,
    rankTextColor: colors.gray,
    textColor: colors.white,
  },
};

export const lightTheme: ThemeType = {
  body: colors.lightGray,
  text: colors.delftBlue,
  navbar: {
    backgroundColor: colors.white,
    inactiveTextColor: colors.transparentDelftBlue,
    inputTextColor: colors.marianBlue,
    inputBackgroundColor: colors.transparentPeriwinkle,
    dropDownBackgroundColor: colors.periwinkle,
    selectTextColor: colors.transparentMarianBlue,
  },
  marketDataBar: {
    backgroundColor: colors.delftBlue,
    textColor: colors.gray,
  },
  sliderButton: {
    containerBackground: colors.white,
    backgroundColor: colors.white,
    activeBackgroundColor: colors.mediumSlateBlue,
    inactiveTextColor: colors.marianBlue,
    activeTextColor: colors.white,
  },
  charts: {
    legendTitleColor: colors.spaceCadet,
    legendValueColor: colors.raisinBlack,
    legendDateColor: colors.marianBlue,
    chartBackgroundColor: colors.white,
    rangeBackgroundColor: colors.transparentPeriwinkle,
    selectedRangeColor: colors.transparentSlateBlue,
  },
  coinPage: {
    blockBackgroundColor: colors.white,
    textColor: colors.delftBlue,
  },
  carousel: {
    cardBackgroundColor: colors.white,
    selectedCardBackgroundColor: colors.transparentSlateBlue,
    coinTextColor: colors.raisinBlack,
    priceTextColor: colors.marianBlue,
  },
  table: {
    headerTextColor: colors.marianBlue,
    coinRowBackgroundColor: colors.white,
    rankTextColor: colors.marianBlue,
    textColor: colors.spaceCadet,
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
