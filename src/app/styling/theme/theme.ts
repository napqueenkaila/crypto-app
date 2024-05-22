import { createGlobalStyle } from "styled-components";

const colors = {
  white: "#FFFFFF",
  halfWhite: "#FFFFFFCC",
  transparentWhite: "#FFFFFF80",
  gray: "#D1D1D1",
  lightGray: "#EBEBEB",
  coolGray: "#A7A7CC",
  silver: "#B9B9BA",
  richBlack: "#13121a",
  raisinBlack: "#191925",
  oxfordBlue: "#14142b",
  delftBlue: "#353570",
  halfDelftBlue: "#353570CC",
  transparentDelftBlue: "#35357080",
  darkPurple: "#1E1932",
  spaceCadet: "#232336",
  spaceCadetDark: "#191932",
  transparentSlateBlue: "#6161D680",
  mediumSlateBlue: "#7878FA80",
  marianBlue: "#424286",
  transparentMarianBlue: "#424286CC",
  periwinkle: "#CCCCFA",
  transparentPeriwinkle: "#CCCCFA66",
  lavender: "#E4E4F0",
  iris: "#5A4FCf",
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
    chartBackgroundColor: colors.darkPurple,
    legend: {
      legendTitleColor: colors.gray,
      legendValueColor: colors.white,
      legendDateColor: colors.silver,
    },
    rangeBar: {
      rangeBackgroundColor: colors.spaceCadet,
      rangeTextColor: colors.coolGray,
      selectedRangeBgColor: colors.transparentSlateBlue,
      selectedRangeTextColor: colors.lavender,
    },
    compareLegend: {
      textColor: colors.gray,
    },
  },
  coinPage: {
    blockBackgroundColor: colors.darkPurple,
    textColor: colors.white,
    buttonBackground: colors.iris,
    allTimeDateColor: colors.silver,
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
  converter: {
    inputHeaderText: colors.transparentWhite,
    inputDivBackground: colors.spaceCadetDark,
    inputBackground: colors.spaceCadetDark,
    outputText: colors.white,
    spanColor: colors.halfWhite,
    breakLine: colors.white,
  },
  portfolio: {
    assets: {
      assetCardBackground: colors.spaceCadetDark,
      buttonBackground: colors.delftBlue,
      purchaseDate: colors.gray,
      dataBlockTitle: colors.gray,
      dataBlockBackground: colors.raisinBlack,
      dataBlockBorder: colors.spaceCadet,
    },
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
    chartBackgroundColor: colors.white,
    legend: {
      legendTitleColor: colors.spaceCadet,
      legendValueColor: colors.raisinBlack,
      legendDateColor: colors.marianBlue,
    },
    rangeBar: {
      rangeBackgroundColor: colors.transparentPeriwinkle,
      rangeTextColor: colors.marianBlue,
      selectedRangeBgColor: colors.transparentSlateBlue,
      selectedRangeTextColor: colors.raisinBlack,
    },
    compareLegend: {
      textColor: colors.marianBlue,
    },
  },
  coinPage: {
    blockBackgroundColor: colors.white,
    textColor: colors.delftBlue,
    buttonBackground: colors.iris,
    allTimeDateColor: colors.transparentDelftBlue,
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
  converter: {
    inputHeaderText: colors.raisinBlack,
    inputDivBackground: colors.white,
    inputBackground: colors.white,
    outputText: colors.delftBlue,
    spanColor: colors.halfDelftBlue,
    breakLine: colors.delftBlue,
  },
  portfolio: {
    assets: {
      assetCardBackground: colors.white,
      buttonBackground: colors.transparentSlateBlue,
      purchaseDate: colors.spaceCadet,
      dataBlockTitle: colors.spaceCadet,
      dataBlockBackground: colors.lightGray,
      dataBlockBorder: colors.transparentWhite,
    },
  },
};

export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html{
    width: 100vw;
  }

  body{
    margin: 0 auto;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    min-height: 100vh;
  }
`;

export type ThemeType = typeof darkTheme;
